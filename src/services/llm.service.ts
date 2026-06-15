import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { EmailInputContext, GeneratedEmailOutput } from '../interfaces/email.interface.js';
import * as dotenv from 'dotenv';

dotenv.config();

const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY,
});

export class LLMEmailService {
    public static async customizeEmail(context: EmailInputContext): Promise<GeneratedEmailOutput> {
        try {
            const systemPrompt = `You are an elite executive copywriter specializing in corporate outreach. 
            You must return your response STRICTLY as a valid JSON object matching this exact interface structure:
            {
                "subjectLine": "A high-open-rate catchy subject line.",
                "emailBody": "The fully drafted email body. Use literal '\\n' for any line breaks or spacing inside this string value.",
                "followUpStrategyTip": "A brief technical tip on strategy."
            }
            CRITICAL RULES:
            1. Do not use actual raw newlines, tabs, or control characters inside the JSON string values. Escape them properly if needed.
            2. Do not wrap the JSON output inside markdown code blocks like \`\`\`json ... \`\`\`.
            3. Return only the raw parsable JSON object array.`;

            const userPrompt = `
                Generate a highly tailored "${context.tone}" email blueprint for a ${context.type} campaign:
                - Sender: ${context.senderName} from ${context.senderCompany}
                - Recipient: ${context.recipientName} (${context.recipientCompanyOrRole})
                - Core Value Proposition: ${context.coreValueProposition}
            `;

            const { text } = await generateText({
                model: groq('llama-3.3-70b-versatile'),
                system: systemPrompt,
                prompt: userPrompt,
                temperature: 0.2, // Temperature mazeed low kiye taake content structure loose na ho
            });

            // Clean up backticks if the LLM accidentally added them anyway
            let cleanedText = text.trim();
            if (cleanedText.startsWith('```json')) {
                cleanedText = cleanedText.substring(7, cleanedText.length - 3).trim();
            } else if (cleanedText.startsWith('```')) {
                cleanedText = cleanedText.substring(3, cleanedText.length - 3).trim();
            }

            // Sanitize unescaped true control characters/linebreaks if any slip through
            cleanedText = cleanedText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");

            const jsonOutput = JSON.parse(cleanedText);
            return jsonOutput as GeneratedEmailOutput;

        } catch (error: any) {
            console.error("Critical parsing fallback triggered within processing layer:", error?.message || error);
            throw new Error("Failed to process executive email metadata output.");
        }
    }
}