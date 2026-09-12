import React from 'react';
import { experience } from '../data/portfolioData';

const ExperienceCard = ({ job }) => {
    return (
        <div className="bg-[#0F0F0F] border border-beige/10 rounded-2xl p-6 shadow-xl hover:border-plum/30 transition-all duration-300">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <div>
                    <h3 className="text-xl font-bold text-beige">{job.role}</h3>
                    <p className="text-plum font-medium">{job.company}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-beige/60">{job.dates}</p>
                    <p className="text-xs text-beige/40">{job.location}</p>
                </div>
            </div>
            <ul className="mt-4 space-y-2">
                {job.points.map((point, idx) => (
                    <li key={idx} className="text-beige/70 text-sm leading-relaxed flex gap-2">
                        <span className="text-olive mt-1.5">•</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-4xl font-bold mb-3 text-center">
                <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
                    Experience
                </span>
            </h2>
            <p className="text-center text-beige/40 text-sm tracking-wide mb-16">
                Where I've worked
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
                {experience.map((job) => (
                    <ExperienceCard key={job.id} job={job} />
                ))}
            </div>
        </section>
    );
};

export default Experience;