import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Server, Database, Wrench, Code2, CheckCircle2 } from 'lucide-react';

const skillGroups = [
  {
    category: 'AI & Multi-Agent Systems',
    icon: Bot,
    color: 'plum',
    description: 'Autonomous workflows & LLM orchestration',
    skills: [
      'LangGraph',
      'Multi-Agent Systems',
      'RAG Pipelines',
      'Prompt Engineering',
      'Groq (Llama 3.1)',
      'LangSmith Tracing',
      'ElevenLabs',
      'Deepgram',
      'Guardrail Validation',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    color: 'olive',
    description: 'High-throughput asynchronous services',
    skills: [
      'Python (Async/Await)',
      'FastAPI',
      'Redis Caching',
      'RESTful API Design',
      'WebSocket Streaming',
      'Supabase',
      'PostgreSQL',
      'Clerk Auth',
    ],
  },
  {
    category: 'Data & Vector Stores',
    icon: Database,
    color: 'plum',
    description: 'Semantic retrieval & storage architecture',
    skills: [
      'ChromaDB',
      'Pinecone',
      'SentenceTransformers',
      'SQL & Query Tuning',
      'Semantic Chunking',
      'Vector Embeddings',
    ],
  },
  {
    category: 'DevOps & Testing',
    icon: Wrench,
    color: 'olive',
    description: 'CI/CD, containerization & reliability',
    skills: [
      'Docker',
      'pytest (Unit & Integration)',
      'GitHub Actions (CI/CD)',
      'Render',
      'Railway',
      'Git & Version Control',
      'Linux / Bash',
    ],
  },
];

const secondarySkills = [
  'Modern JavaScript (ES6+)',
  'React',
  'Tailwind CSS',
  'Web Speech API',
  'Progressive Web Apps (PWA)',
  'HTML5 / CSS3',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-plum via-beige to-olive bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <p className="text-sm text-beige/50 max-w-lg mx-auto">
          Production technologies and frameworks I use to build scalable AI systems.
        </p>
      </div>

      {/* Recruiter Quick Highlights Banner */}
      <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-[#16161F] border border-white/[0.08] flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-slate-300 shadow-md">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={15} className="text-olive" />
          <span><strong className="text-white">Core Focus:</strong> Autonomous Agents &amp; RAG</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={15} className="text-plum" />
          <span><strong className="text-white">Primary Stack:</strong> Python · FastAPI · LangGraph</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={15} className="text-olive" />
          <span><strong className="text-white">Quality:</strong> Automated pytest · CI/CD</span>
        </div>
      </div>

      {/* Main 4-Column Skills Grid — 100% visible at a glance */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          const isPlum = group.color === 'plum';

          return (
            <div
              key={group.category}
              className="p-7 rounded-2xl bg-[#16161F] border border-white/[0.08] hover:border-plum/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      isPlum
                        ? 'bg-plum/10 border-plum/30 text-plum'
                        : 'bg-olive/10 border-olive/30 text-olive'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {group.category}
                  </h3>
                </div>

                <p className="text-[11px] text-[#94A3B8] mb-5 font-light leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:border-plum/30 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Frontend & Web Technologies Bar */}
      <div className="max-w-6xl mx-auto p-6 rounded-2xl bg-[#16161F] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/10 text-slate-300">
            <Code2 size={16} />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Frontend &amp; UI Integration
            </h4>
            <p className="text-[11px] text-[#94A3B8]">
              Interactive client interfaces, audio streaming &amp; PWA development
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {secondarySkills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;