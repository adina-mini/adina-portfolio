import React, { useState } from 'react';
import { Award, GraduationCap, Zap, Code, ChevronDown, ChevronUp } from 'lucide-react';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const specializations = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: 'June 2025',
      icon: <GraduationCap size={18} />,
    },
    {
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Sep Anthropic',
      date: '2026',
      icon: <Zap size={18} />,
    },
    {
      title: 'IBM AI Developer',
      issuer: 'IBM',
      date: 'Aug 2025',
      icon: <Code size={18} />,
    },
  ];

  const otherCerts = [
    { title: 'Google Prompting Essentials', issuer: 'Google' },
    { title: 'AI Fluency for Students', issuer: 'Anthropic' },
    { title: 'Claude 101', issuer: 'Anthropic' },
    { title: 'Foundations of Coding Full Stack', issuer: 'Microsoft' },
  ];

  const visibleCerts = showAll ? otherCerts : otherCerts.slice(0, 3);

  return (
    <section id="certifications" className="py-20">
      <div>
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Specializations */}
        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specializations.map((cert) => (
              <div
                key={cert.title}
                className="bg-[#0F0F0F] border border-beige/10 rounded-2xl p-5 hover:border-plum/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-plum/20 rounded-full p-3">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-beige mb-1">{cert.title}</h4>
                    <p className="text-plum text-sm mb-1">{cert.issuer}</p>
                    <span className="inline-block text-xs text-beige/40 bg-beige/5 px-2 py-0.5 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact list of other certs, expandable */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Award size={16} className="text-olive" />
            <p className="text-sm text-beige/50">Also completed</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {visibleCerts.map((cert) => (
              <span
                key={cert.title}
                className="px-3 py-1.5 bg-beige/5 border border-beige/10 rounded-full text-xs text-beige/60"
                title={cert.issuer}
              >
                {cert.title} <span className="text-beige/30">· {cert.issuer}</span>
              </span>
            ))}
          </div>
          {otherCerts.length > 3 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-1 text-xs text-beige/50 hover:text-olive transition"
              >
                {showAll ? (
                  <>Show less <ChevronUp size={14} /></>
                ) : (
                  <>View all certifications <ChevronDown size={14} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;