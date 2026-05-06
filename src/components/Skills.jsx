import React from 'react';

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

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          Tech Arsenal
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-5 py-2 bg-gradient-to-r from-plum/20 to-olive/20 text-beige rounded-full text-sm font-medium border border-plum/30 shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;