import { LLMEmailService } from './services/llm.service';
import { EmailInputContext } from './interfaces/email.interface';

async function bootstrap() {
    console.log("🚀 Initializing TypeScript Agentic Outreach Workflow...");

    // Test Case: HR Agent looking for an AI Workflow Developer
    const mockHRContext: EmailInputContext = {
        senderName: "Sheza Mubeen",
        senderCompany: "AI Automation Engineer",
        recipientName: "Alex Mercer",
        recipientCompanyOrRole: "Lead Technical Recruiter at NextGen Solutions",
        coreValueProposition: "Built type-safe autonomous multi-agent pipelines reducing client operations costs by 40%",
        tone: "Executive/Luxury",
        type: "HR_Outreach"
    };

    console.log("⚡ Orchestrating custom email payload details via Groq Llama-3.1 Matrix...");
    
    const result = await LLMEmailService.customizeEmail(mockHRContext);

    console.log("\n==================================================");
    console.log(`✨ SUBJECT: ${result.subjectLine}`);
    console.log("==================================================");
    console.log(`\n${result.emailBody}`);
    console.log("\n==================================================");
    console.log(`💡 STRATEGY TIP: ${result.followUpStrategyTip}`);
    console.log("==================================================\n");
}

bootstrap();