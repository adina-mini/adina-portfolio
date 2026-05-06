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

export const projects = [
  {
    id: 1,
    title: 'Smart Habit Architect (PWA)',
    description: 'A high-performance, offline-first Progressive Web App for minimalist habit tracking with 100% offline functionality',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage API'],
    github: '',
    live: null,
    image: '/images/projects/project1.png',
  },
  {
    id: 2,
    title: 'Agentic Lead Intake & Priority Engine',
    description: 'Converts messy DMs into structured sales pipeline with intent classification',
    tech: ['n8n', 'Llama 3 (Groq)', 'Sentiment Analysis', 'Google Sheets API'],
    github: '',
    live: null,
    image: '/images/projects/project2.png',  // ← Now project3.png becomes project2
  },
  {
    id: 3,
    title: 'Intelligent Email Response Architect',
    description: 'Auto email classification + smart draft generation (90% automation)',
    tech: ['n8n', 'Gmail API', 'GPT-4o mini'],
    github: '',
    live: null,
    image: '/images/projects/project3.png',
  },
  {
    id: 4,
    title: 'RAG-Powered Technical Audit Analyst',
    description: 'RAG system for analyzing technical audit documents',
    tech: ['n8n', 'Pinecone', 'OpenAI Embeddings'],
    github: '',
    live: null,
    image: '/images/projects/project4.png',
  },
];
export const socialLinks = [
  { platform: 'github', label: 'github.com/adina-mini', url: 'https://github.com/adina-mini' },
  { platform: 'linkedin', label: 'Adina Rehman Z', url: 'https://linkedin.com/in/adina-rehman-z/' },
  { platform: 'twitter', label: '@adina61785', url: 'https://twitter.com/adina61785' },
  { platform: 'email', label: 'adinarehman018@gmail.com', url: 'mailto:adinarehman018@gmail.com' },
];