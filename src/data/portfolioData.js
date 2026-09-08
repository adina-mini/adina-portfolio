// =============================================
// FILE: src/data/portfolioData.js
// =============================================

export const skills = [
  'Machine Learning',
  'Prompt Engineering',
  'RAG Systems',
  'Agentic Workflows (n8n)',
  'LLM Integration',
  'Vector Databases (Pinecone)',
  'Progressive Web Apps',
  'Vulnerability Assessment',
  'API Automation',
  'Python Development',
];
export const experience = [
  {
    id: 1,
    role: 'AI/ML Intern',
    company: 'QM Logics',
    dates: 'Jun 2026 – Aug 2026',
    location: 'Bahawalpur, Pakistan · On-site',
    points: [
      'Shipped a config-driven AI chatbot (FastAPI + Groq) with zero-hallucination guardrails and LLM-based intent detection for automated lead qualification — demoed and confirmed working by company leadership.',
      'Built stateful multi-agent systems with LangGraph using Planner, Researcher, and Writer roles for orchestrated task execution.',
      'Engineered a legal/constitutional RAG pipeline using ChromaDB, SentenceTransformers, and Groq Llama 3.1.',
    ],
  },
  {
    id: 2,
    role: 'AI/ML Intern',
    company: 'DecodeLabs',
    dates: 'May 2026 – Jun 2026',
    location: 'Remote',
    points: [
      'Built a KNN classification pipeline, a TF-IDF/cosine-similarity job recommendation engine, and a NumPy neural network trained on XOR.',
    ],
  },
  {
    id: 3,
    role: 'Freelance AI Agent Developer',
    company: 'Self-Employed',
    dates: '2025 – 2026',
    location: 'Remote',
    points: [
      'Designed and delivered custom AI agent solutions for clients, including LLM-powered task automation, tool-calling agents, and conversational assistants.',
      'Built agent workflows using LangGraph/LangChain and LLM APIs (OpenAI, Groq, Gemini), applying prompt engineering to keep outputs reliable and on-scope.',
    ],
  },
];
export const projects = [
  {
    id: 1,
    title: 'HeatOps Autopilot',
    description: 'Autonomous LangGraph agent that screens, scores, and acts on heat risk across 8 real U.S. sites using live temperature API data. Deterministic 0-100 risk scoring, 31 automated tests, full audit trail.',
    tech: ['LangGraph', 'Python', 'Chart.js', 'FortyGuard API', 'pytest'],
    github: 'https://github.com/adina-mini/heatops-autopilot',
    live: 'https://adina-mini.github.io/heatops-autopilot/dashboard.html',
    image: '/images/projects/heatops-autopilot.png',
  },
  {
    id: 2,
    title: 'RAG-Powered Technical Audit Analyst',
    description: 'n8n + Pinecone RAG workflow that automates technical audit document analysis',
    tech: ['n8n', 'Pinecone', 'OpenAI Embeddings'],
    github: 'https://github.com/adina-mini/RAG-technical-audit-analyst',
    live: null,
    image: '/images/projects/rag-audit-analyst.png',
  },
  {
    id: 3,
    title: 'Agentic Lead Intake & Priority Engine',
    description: 'Converts messy DMs into a structured sales pipeline with intent classification and automated routing.',
    tech: ['n8n', 'Llama 3 (Groq)', 'Sentiment Analysis', 'Google Sheets API'],
    github: null,
    live: null,
    image: '/images/projects/lead-intake-engine.png',
  },
  {
    id: 4,
    title: 'Intelligent Email Response Architect',
    description: 'Automated email classification and smart draft generation, handling 90% of responses automatically.',
    tech: ['n8n', 'Gmail API', 'GPT-4o mini'],
    github: null,
    live: null,
    image: '/images/projects/email-response-architect.png',
  },
  {
    id: 5,
    title: 'Smart Habit Architect (PWA)',
    description: 'Offline-first Progressive Web App for minimalist habit tracking with 100% offline functionality.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage API'],
    github: 'https://github.com/adina-mini/habit_tracker',
    live: null,
    image: '/images/projects/habit-tracker.png',
  },
];
export const socialLinks = [
  { platform: 'github', label: 'github.com/adina-mini', url: 'https://github.com/adina-mini' },
  { platform: 'linkedin', label: 'Adina Rehman Z', url: 'https://linkedin.com/in/adina-rehman-z/' },
  { platform: 'twitter', label: '@adina61785', url: 'https://twitter.com/adina61785' },
  { platform: 'email', label: 'adinarehman018@gmail.com', url: 'mailto:adinarehman018@gmail.com' },
];