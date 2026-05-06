import React from 'react';
import { Sparkles, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="max-w-3xl mx-auto bg-[#0F0F0F] border border-beige/10 rounded-2xl p-8 shadow-xl">
        <p className="text-beige/80 text-lg leading-relaxed mb-6">
  Assalam u Alikum!
</p>
<p className="text-beige/80 text-lg leading-relaxed mb-6">
  Since childhood, I wanted to be a scientist. I was that kid who constantly asked "why?" and "how does this work?" taking things apart just to understand them. I dreamed of exploring the unknown, making discoveries, and building things that didn't exist before.
</p>
<p className="text-beige/80 text-lg leading-relaxed mb-6">
  But God had a different path for me. And honestly? I couldn't be more grateful.
</p>
<p className="text-beige/80 text-lg leading-relaxed mb-6">
  Because AI isn't lesser than being a scientist .... it IS science. Every day, I'm still exploring new frontiers, asking "why?", and building things from scratch. The only difference is My laboratory is code. My experiments are prompts, workflows, and intelligent systems. And my discoveries help real people solve real problems.
</p>
<p className="text-beige/80 text-lg leading-relaxed mb-6">
  Today, I build agentic workflows, RAG systems, and AI-powered automations. I speak the language of Python, n8n, and LLMs. But at my core, I'm still that curious child .. just with a keyboard instead of a lab coat.
</p>
<p className="text-beige/80 text-lg leading-relaxed mb-8">
  And honestly? I wouldn't trade this journey for anything. Good Day🎈🎀
</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-plum/10 rounded-xl p-4 border border-plum/20">
            <Sparkles className="text-plum mb-2" size={24} />
            <p className="font-bold text-beige">✨ Mission</p>
            <p className="text-sm text-beige/60">Democratize AI for everyone</p>
          </div>
          <div className="bg-olive/10 rounded-xl p-4 border border-olive/20">
            <Target className="text-olive mb-2" size={24} />
            <p className="font-bold text-beige">🎯 Focus</p>
            <p className="text-sm text-beige/60">AI Orchestration & Ethics</p>
          </div>
          <div className="bg-plum/10 rounded-xl p-4 border border-plum/20">
            <Heart className="text-plum mb-2" size={24} />
            <p className="font-bold text-beige">❤️ Passion</p>
            <p className="text-sm text-beige/60">Building with purpose</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;