import React from 'react';

const skillCategories = [
  {
    category: 'AI / ML',
    items: ['LangGraph', 'Multi-Agent Systems', 'RAG', 'Prompt Engineering', 'Groq', 'ElevenLabs'],
    accent: 'from-plum/30 via-plum/5 to-transparent',
    icon: '◆',
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Python', 'Redis', 'API Design', 'Authentication (Supabase/Clerk)'],
    accent: 'from-olive/30 via-olive/5 to-transparent',
    icon: '◇',
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'HTML/CSS', 'Web Speech API', 'WebSocket Streaming'],
    accent: 'from-plum/30 via-olive/10 to-transparent',
    icon: '◆',
  },
  {
    category: 'Data / Infra',
    items: ['ChromaDB', 'SentenceTransformers', 'SQL', 'Docker', 'GitHub Actions', 'pytest'],
    accent: 'from-olive/30 via-plum/10 to-transparent',
    icon: '◇',
  },
  {
    category: 'Deployment',
    items: ['Render', 'Railway', 'Multi-Service Deployment'],
    accent: 'from-plum/30 via-olive/5 to-transparent',
    icon: '◆',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <style>{`
        .skill-card {
          position: relative;
          background: #0F0F0F;
          border: 1px solid rgba(231, 215, 193, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Subtle hairline that lights up on hover */
        .skill-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(139,94,124,0.5), transparent 40%, rgba(168,176,138,0.4));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .skill-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139,94,124,0.25);
        }
        .skill-card:hover::after { opacity: 1; }

        .skill-card:hover .skill-icon {
          color: #8B5E7C;
          transform: rotate(90deg) scale(1.15);
        }
        .skill-card:hover .skill-title {
          letter-spacing: 0.22em;
        }
        .skill-card:hover .skill-item {
          color: #E7D7C1;
        }

        .skill-icon {
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          display: inline-block;
        }
        .skill-title {
          transition: letter-spacing 0.5s ease;
        }
        .skill-item {
          transition: color 0.35s ease;
        }
      `}</style>

      <h2 className="text-4xl font-bold mb-3 text-center">
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          Tech Arsenal
        </span>
      </h2>
      <p className="text-center text-beige/40 text-sm tracking-wide mb-16">
        The toolkit behind the work
      </p>

      <div className="max-w-5xl mx-auto px-6 grid gap-6 md:grid-cols-2">
        {skillCategories.map((group, idx) => (
          <div
            key={group.category}
            className="skill-card p-6 md:p-7"
          >
            {/* Header row: icon + category */}
            <div className="relative flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="skill-icon text-plum/60 text-lg">{group.icon}</span>
                <h3 className="skill-title text-xs uppercase tracking-[0.18em] text-olive/80">
                  {group.category}
                </h3>
              </div>
              <span className="text-beige/20 text-xs font-mono">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Skills as inline text */}
            <div className="relative flex flex-wrap gap-x-3 gap-y-2">
              {group.items.map((skill, i) => (
                <span
                  key={skill}
                  className="skill-item text-beige/70 text-sm md:text-[15px] transition-colors"
                >
                  {skill}
                  {i < group.items.length - 1 && (
                    <span className="text-plum/40 mx-2">·</span>
                  )}
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