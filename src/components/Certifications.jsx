import React from 'react';
import { Award, GraduationCap, Code, Zap } from 'lucide-react';

const Certifications = () => {
  const specializations = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: 'June 2025',
      icon: <GraduationCap size={18} />,
    },
    {
      title: 'Google Prompting Essentials',
      issuer: 'Google',
      date: 'January 2025',
      icon: <Zap size={18} />,
    },
  ];

  const technicalCourses = [
    {
      title: 'Advanced Learning Algorithms',
      issuer: 'DeepLearning.AI',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI',
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'DeepLearning.AI',
    },
    {
      title: 'Building Generative AI-Powered Applications with Python',
      issuer: 'IBM',
    },
    {
      title: 'Foundations of Coding Full Stack',
      issuer: 'Microsoft',
    },
    {
      title: 'Design Prompts for Everyday Work Tasks',
      issuer: 'Google',
    },
    {
      title: 'Start Writing Prompts like a Pro',
      issuer: 'Google',
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div>
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Specializations Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-plum"></div>
            <h3 className="text-xl font-semibold text-plum flex items-center gap-2">
              <GraduationCap size={20} /> Specializations
            </h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-plum to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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

        {/* Technical Courses Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-olive"></div>
            <h3 className="text-xl font-semibold text-olive flex items-center gap-2">
              <Code size={20} /> Technical Courses
            </h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-olive to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalCourses.map((course) => (
              <div
                key={course.title}
                className="bg-[#0F0F0F] border border-beige/10 rounded-xl p-4 hover:border-olive/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Award size={16} className="text-olive" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-beige mb-1">{course.title}</h4>
                    <p className="text-xs text-olive">{course.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 bg-gradient-to-r from-plum/10 to-olive/10 rounded-2xl p-6 text-center border border-beige/10">
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <div className="text-3xl font-bold text-plum">2</div>
              <div className="text-xs text-beige/60">Specializations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-olive">7</div>
              <div className="text-xs text-beige/60">Technical Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-beige">4</div>
              <div className="text-xs text-beige/60">Top Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;