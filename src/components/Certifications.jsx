import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

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

  return (
    <section id="certifications" className="py-24">
      <style>{`
        /* Gradient hairline that runs across the top of each spec card */
        .spec-card {
          position: relative;
          background: #0F0F0F;
          border: 1px solid rgba(231, 215, 193, 0.08);
          border-radius: 18px;
          padding: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .spec-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(139,94,124,0.4), rgba(168,176,138,0.3), transparent);
          opacity: 0.5;
          transition: opacity 0.4s ease;
        }
        .spec-card:hover {
          transform: translateY(-3px);
          border-color: rgba(139,94,124,0.35);
        }
        .spec-card:hover::before {
          opacity: 1;
        }
        .spec-card:hover .spec-verify {
          color: #A8B08A;
          gap: 6px;
        }

        .spec-verify {
          transition: color 0.3s ease, gap 0.3s ease;
        }
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

      {/* ---------- Specializations ---------- */}
      <div className="mb-14">
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto px-6">
          {specializations.map((cert) => (
            <div key={cert.title} className="spec-card group">
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
                  <h4 className="text-[15px] font-bold text-beige mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-plum text-xs mb-3">{cert.issuer}</p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[11px] text-beige/45 tracking-wide">
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
            </div>
          ))}
        </div>
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

        <div className="flex flex-wrap justify-center gap-2.5 mb-5">
          {visibleCerts.map((cert) => (
            <span
              key={cert.title}
              className="group px-3 py-1.5 bg-beige/[0.04] border border-beige/10 rounded-full text-[11px] text-beige/65 hover:border-plum/40 hover:bg-plum/[0.06] hover:text-beige/90 transition-all duration-300"
            >
              {cert.title}
              <span className="text-beige/30 group-hover:text-plum/50 transition-colors">
                {' · '}
                {cert.issuer}
              </span>
            </span>
          ))}
        </div>

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