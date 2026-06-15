export type EmailTone = 'Executive/Luxury' | 'Technical/Direct' | 'Warm/Collaborative';
export type CampaignType = 'HR_Outreach' | 'Sales_Pitch';

export interface EmailInputContext {
    senderName: string;
    senderCompany: string;
    recipientName: string;
    recipientCompanyOrRole: string;
    coreValueProposition: string; // Key skill or product benefit
    tone: EmailTone;
    type: CampaignType;
}

export interface GeneratedEmailOutput {
    subjectLine: string;
    emailBody: string;
    followUpStrategyTip: string;
}