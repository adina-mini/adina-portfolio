import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideLeft, slideRight, fadeUp, staggerContainer } from '../lib/motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.20 });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">

        {/* Left — sticky heading */}
        <motion.div
          variants={slideLeft(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="sticky top-24">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-sm text-beige/40 tracking-wide mt-3">The story so far</p>
          </div>
        </motion.div>

        {/* Right — card with paragraphs staggered */}
        <motion.div
          variants={slideRight(0.15)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative border border-white/[0.08] rounded-2xl p-8 md:p-10 bg-[#16161F] overflow-hidden shadow-xl"
          whileHover={{
            borderColor: 'rgba(139,94,124,0.4)',
            boxShadow: '0 0 0 1px rgba(139,94,124,0.15), 0 20px 60px -20px rgba(139,94,124,0.25)',
            y: -3,
            transition: { duration: 0.3 },
          }}
        >
          {/* Decorative quote mark */}
          <span className="absolute -top-2 right-6 text-7xl font-serif text-white/5 select-none pointer-events-none">"</span>

          <motion.div
            variants={staggerContainer(0.15, 0.3)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative space-y-5"
          >
            <motion.p variants={fadeUp(0)} className="text-slate-200 text-lg leading-relaxed">
              I've always taken things apart just to see how they work. Started out wanting to do physics, astronomy specifically, but God had other plans. AI turned out to be the same itch.
            </motion.p>
            <motion.p variants={fadeUp(0)} className="text-slate-200 text-lg leading-relaxed">
              I build systems that don't need me hovering over them: agentic pipelines, RAG that actually retrieves the right thing, automation that runs while I sleep. I want what I build to hold up under real, messy conditions, not just work in a clean demo. That moment, when it actually works the way I imagined, is still the best part of the job.
            </motion.p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;