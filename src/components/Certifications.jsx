import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  // ---------- SPECIALIZATIONS (with logos + verify links) ----------
  const specializations = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford Online',
      date: 'June 2025',
      logo: '/images/certifications/stanford.png',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/7LJ1LM7WW698',
    },
    {
      title: 'Google Prompting Essentials',
      issuer: 'Google',
      date: '2025',
      logo: '/images/certifications/google.png',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/4A9139CECMIZ',
    },
    {
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic',
      date: '2026',
      logo: '/images/certifications/anthropic.png',
      verifyUrl: '',
    },
  ];

  // ---------- OTHER COURSES (grouped by issuer) ----------
  const otherCerts = [
    { title: 'AI Fluency for Students', issuer: 'Anthropic' },
    { title: 'Claude 101', issuer: 'Anthropic' },
    { title: 'Foundations of Coding Full Stack', issuer: 'Microsoft' },
    { title: 'Generative AI for Everyone', issuer: 'DeepLearning.AI' },
    { title: 'Generative AI Applications', issuer: 'IBM' },
    { title: 'Data Science', issuer: 'PFTP' },
  ];

  const visibleCerts = showAll ? otherCerts : otherCerts.slice(0, 4);

  const handleImgError = (key) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.10 });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <style>{`
        .spec-card {
          position: relative;
          background: #16161F;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 22px 20px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Top gradient hairline */
        .spec-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(139,94,124,0.5), rgba(107,138,107,0.4), transparent);
          opacity: 0.4;
          transition: opacity 0.4s ease;
        }

        /* Diagonal shimmer sweep */
        .spec-card::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 55%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(255,255,255,0.035) 50%,
            transparent 80%
          );
          transform: skewX(-15deg);
          transition: left 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .spec-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139,94,124,0.4);
          box-shadow: 0 0 0 1px rgba(139,94,124,0.15), 0 20px 40px -16px rgba(139,94,124,0.25);
        }
        .spec-card:hover::before { opacity: 1; }
        .spec-card:hover::after  { left: 160%; }

        .spec-card:hover .spec-verify { color: #A8B08A; gap: 6px; }
        .spec-verify { transition: color 0.3s ease, gap 0.3s ease; }

        /* Pill tags shimmer */
        .cert-pill {
          position: relative; overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cert-pill::after {
          content: '';
          position: absolute;
          top: 0; left: -80%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139,94,124,0.12), transparent);
          transform: skewX(-15deg);
          transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cert-pill:hover::after { left: 130%; }
      `}</style>

      {/* ---------- Header ---------- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className="text-sm text-beige/40 tracking-wider">
          Programs & courses that shaped how I build
        </p>
      </div>

      {/* Specializations */}
      <div className="mb-14">
        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto px-6"
        >
          {specializations.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp(0, 18)}
              className="spec-card group"
            >
              <div className="relative flex items-start gap-4">
                {/* Logo */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center p-2 shadow-md">
                  {!imgErrors[cert.issuer] ? (
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                      onError={() => handleImgError(cert.issuer)}
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-lg font-bold text-plum">
                      {cert.issuer[0]}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-bold text-white mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-plum text-xs mb-3 font-medium">{cert.issuer}</p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[11px] text-slate-400 tracking-wide font-mono">
                      {cert.date}
                    </span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="spec-verify inline-flex items-center gap-1 text-[11px] text-olive/70 hover:text-olive"
                      >
                        Verify <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ---------- Other courses ---------- */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-plum/40" />
          <div className="flex items-center gap-2">
            <Award size={14} className="text-olive/80" />
            <p className="text-[11px] text-beige/50 uppercase tracking-[0.2em]">
              Also completed
            </p>
          </div>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-olive/40" />
        </div>

        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-2.5 mb-5"
        >
          {visibleCerts.map((cert) => (
            <motion.span
              key={cert.title}
              variants={fadeUp(0, 10)}
              className="cert-pill group px-3 py-1.5 bg-beige/[0.04] border border-beige/10 rounded-full text-[11px] text-beige/65 hover:border-plum/40 hover:bg-plum/[0.06] hover:text-beige/90"
            >
              {cert.title}
              <span className="text-beige/30 group-hover:text-plum/50 transition-colors">
                {' · '}{cert.issuer}
              </span>
            </motion.span>
          ))}
        </motion.div>

        {otherCerts.length > 4 && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1.5 text-[11px] text-beige/45 hover:text-olive transition tracking-wider uppercase"
            >
              {showAll ? (
                <>Show less <ChevronUp size={13} /></>
              ) : (
                <>View all courses <ChevronDown size={13} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;