# 💼 AI Cold-Email Customizer (Autonomous Outreach Agent)

A high-performance, enterprise-grade **TypeScript Micro-Workflow Agent** built utilizing the **Vercel AI SDK Core** and orchestration via **Groq Cloud (Llama 3.3 Matrix)**. This tool automates corporate sales pitches and HR outreach by generating deeply personalized, high-conversion email blueprint setup.

---

## ⚡ Core Engine Features
* **Type-Safe Context Flow:** Structured variables leveraging TypeScript `interfaces` ensure runtime input validation.
* **Object Output:** Bypasses open-ended LLM string generation by parsing strictly formatted system payloads.
* **Dual Campaign Matrix:** Contextual shifts between `HR_Outreach` strategies and high-impact `Sales_Pitch` delivery.
* **Adaptive Tone Profiler:** Dynamically configures copywriter parameters to matching styles (e.g., Executive/Luxury, Technical).

---

## 📂 Architecture Structure
```text
src/
├── interfaces/
│   └── email.interface.ts   # Strict typing data contracts
├── services/
│   └── llm.service.ts       # LLM provider configuration & text sanitation
└── index.ts                 # Main execution workflow orchestrator!
  ```
<img width="1902" height="547" alt="AI Cold-Email Customizer" src="https://github.com/user-attachments/assets/a04a17ce-e46c-4893-b7f1-a28245dde0ec" />
