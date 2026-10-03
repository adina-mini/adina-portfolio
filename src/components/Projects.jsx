import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

// Wipe up entrance reveal for editorial rhythm
const wipeReveal = (delay = 0) => ({
  hidden:  { clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 20 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const headingReveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--sx', `${e.clientX - r.left}px`);
    cardRef.current.style.setProperty('--sy', `${e.clientY - r.top}px`);
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--sx', '-999px');
    cardRef.current.style.setProperty('--sy', '-999px');
  };

  const primaryLink = project.live || project.github;

  // Dynamic Live Proof telemetry indicators
  const liveProof = 
    project.id === 1 ? 'LIVE AGENT · 8 Sites Monitored · 31/31 Tests Passing' :
    project.id === 2 ? 'PRODUCTION CHAT · Zero-Hallucination Guardrails' :
    project.id === 3 ? 'EVAL OBSERVED · 10/10 LLM-as-Judge Assertions' :
    project.id === 4 ? 'AUTOMATED RAG · 70% Review Time Reduction' :
    null;

  return (
    <motion.div
      variants={wipeReveal(index * 0.07)}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="project-spotlight-card group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#16161F] transition-all duration-300 hover:border-plum/40 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
    >
      {/* Image showcase — fills edge-to-edge with zero black space or padding */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        {/* Subtle bottom gradient to blend naturally into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16161F] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Floating Glass Badges */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 tracking-wider shadow-sm">
            0{index + 1}
          </span>
        </div>

        {primaryLink && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 group-hover:bg-plum group-hover:text-white group-hover:border-plum transition-all duration-300 group-hover:rotate-45 shadow-sm"
            >
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>

      {/* Card Content Body with generous 32px (p-8) padding */}
      <div className="p-7 md:p-8 flex flex-col justify-between flex-1 relative z-10">
        <div>
          {/* Dynamic Live Proof Badge */}
          {liveProof && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-olive/10 border border-olive/25 text-[11px] font-mono text-olive font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
              <span>{liveProof}</span>
            </div>
          )}

          <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-beige transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors duration-200">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech?.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08] group-hover:border-plum/30 transition-colors duration-200 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                <Github size={14} /> View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-olive hover:text-olive/80 transition-colors duration-200 font-medium"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.06 });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <style>{`
        .project-spotlight-card {
          position: relative;
          background: #16161F;
        }
        .project-spotlight-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(139,94,124,0.4), rgba(107,138,107,0.35), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 20;
        }
        .project-spotlight-card:hover::before { opacity: 1; }
      `}</style>

      <motion.div
        variants={headingReveal}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
            Selected Work
          </span>
        </h2>
        <p className="text-sm text-beige/35 tracking-widest uppercase">
          Autonomous agents, RAG pipelines & high-impact software
        </p>
      </motion.div>

      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;