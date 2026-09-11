import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold sticky top-24">
            <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="relative border border-beige/10 rounded-2xl p-8 md:p-10 bg-[#0F0F0F]/40 overflow-hidden transition-all duration-300 hover:border-plum/30">
          {/* Gradient accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-plum to-olive" />

          {/* Decorative quote mark */}
          <span className="absolute -top-2 right-6 text-7xl font-serif text-beige/5 select-none pointer-events-none">
            "
          </span>

          <div className="relative space-y-5">
            <p className="text-beige/80 text-lg leading-relaxed">
              I've always taken things apart just to see how they work. Started out wanting to do physics, astronomy specifically, but God had other plans. AI turned out to be the same itch.
            </p>
            <p className="text-beige/80 text-lg leading-relaxed">
              I build systems that don't need me hovering over them: agentic pipelines, RAG that actually retrieves the right thing, automation that runs while I sleep. I want what I build to hold up under real, messy conditions, not just work in a clean demo. That moment, when it actually works the way I imagined, is still the best part of the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;