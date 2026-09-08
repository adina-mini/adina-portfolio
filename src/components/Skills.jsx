import React from 'react';

const skillCategories = [
  {
    category: 'AI / ML',
    items: [
      'LangGraph',
      'Multi-Agent Systems',
      'RAG',
      'Prompt Engineering',
      'Groq',
      'ElevenLabs',
    ],
  },
  {
    category: 'Backend',
    items: [
      'FastAPI',
      'Python',
      'Redis',
      'API Design',
      'Authentication (Supabase/Clerk)',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'JavaScript',
      'HTML/CSS',
      'Web Speech API',
      'WebSocket Streaming',
    ],
  },
  {
    category: 'Data / Infra',
    items: [
      'ChromaDB',
      'SentenceTransformers',
      'SQL',
      'Docker',
      'GitHub Actions',
      'pytest',
    ],
  },
  {
    category: 'Deployment',
    items: [
      'Render',
      'Railway',
      'Multi-Service Deployment',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          Tech Arsenal
        </span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-olive mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-plum/20 to-olive/20 text-beige rounded-full text-sm font-medium border border-plum/30 shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;