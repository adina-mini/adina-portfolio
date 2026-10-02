import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

// Wipe up reveal for consistent editorial entrance
const wipeReveal = (delay = 0) => ({
  hidden:  { clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 15 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const headingReveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const ExperienceCard = ({ job, index }) => {
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

  return (
    <motion.div
      variants={wipeReveal(index * 0.1)}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="experience-spotlight-card group relative rounded-2xl p-7 md:p-8 bg-[#16161F] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-plum/40 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
    >
      {/* Dynamic left accent line — fills top-to-bottom on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/[0.04]">
        <div className="w-full h-full bg-gradient-to-b from-plum via-olive to-plum transform scale-y-0 group-hover:scale-y-100 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top shadow-[0_0_12px_rgba(139,94,124,0.6)]" />
      </div>

      {/* Top subtle hairline glow */}
      <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-plum/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-olive group-hover:bg-plum transition-colors duration-300 shadow-[0_0_8px_rgba(107,138,107,0.4)]" />
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-beige transition-colors duration-200">
              {job.role}
            </h3>
          </div>
          <p className="text-plum font-medium tracking-wide text-sm flex items-center gap-2">
            <span>{job.company}</span>
          </p>
        </div>

        <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-slate-300">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Calendar size={13} className="text-olive" />
            {job.dates}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[#94A3B8]">
            <MapPin size={13} className="text-plum/70" />
            {job.location}
          </span>
        </div>
      </div>

      {/* Accomplishment points */}
      <ul className="space-y-3.5 relative z-10 pl-1">
        {job.points.map((point, idx) => (
          <li key={idx} className="text-[#94A3B8] text-sm leading-relaxed flex items-start gap-3 group/item">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-olive/50 group-hover:bg-olive transition-colors duration-200 shrink-0" />
            <span className="group-hover/item:text-slate-200 transition-colors duration-200">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <style>{`
        .experience-spotlight-card {
          /* Spotlight effect — follows mouse via --sx --sy CSS vars */
          background:
            radial-gradient(
              circle 240px at var(--sx, -999px) var(--sy, -999px),
              rgba(139,94,124,0.14),
              transparent 70%
            ),
            #16161F;
        }
        .experience-spotlight-card:hover {
          box-shadow:
            0 0 0 1px rgba(139,94,124,0.12),
            0 20px 45px -18px rgba(139,94,124,0.2);
        }
      `}</style>

      <motion.div
        variants={headingReveal}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-sm text-beige/35 tracking-widest uppercase">
          Proven history building production AI systems
        </p>
      </motion.div>

      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto space-y-6"
      >
        {experience.map((job, i) => (
          <ExperienceCard key={job.id} job={job} index={i} />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;