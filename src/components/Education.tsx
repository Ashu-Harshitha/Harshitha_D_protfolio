import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface EducationProps {
  theme: ThemeMode;
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className={`py-24 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
            <span>07 / ACADEMICS</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Education
          </h2>
          <p className={`mt-2 text-base max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Rigorous foundation in computer science principles, software systems, and engineering practice.
          </p>
        </div>

        {/* Main Degree Card + Minimal Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main University Card */}
          <div className={`lg:col-span-5 p-8 rounded-3xl border ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0c0f18] to-[#080a10] border-white/10 shadow-xl shadow-cyan-950/20'
              : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${
              theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-700'
            }`}>
              <GraduationCap className="w-6 h-6" />
            </div>

            <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              {education.degree}
            </h3>

            <p className={`text-base font-semibold mb-4 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
            }`}>
              {education.university}
            </p>

            <div className={`flex items-center gap-2 text-xs font-mono mb-6 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} />
              <span className={theme === 'dark' ? 'text-emerald-400 font-semibold' : 'text-emerald-700 font-semibold'}>
                {education.graduation}
              </span>
            </div>

            <div className={`pt-6 border-t flex items-center gap-2 text-xs ${
              theme === 'dark' ? 'border-white/10 text-neutral-400' : 'border-neutral-200 text-neutral-600'
            }`}>
              <MapPin className={`w-4 h-4 shrink-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`} />
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>

          {/* Minimal University Progression Timeline */}
          <div className={`lg:col-span-7 p-8 rounded-3xl border ${
            theme === 'dark'
              ? 'bg-[#0a0d15]/90 border-white/10'
              : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <h4 className={`text-xs font-mono uppercase tracking-wider mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600 font-semibold'
            }`}>
              <BookOpen className={`w-4 h-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`} />
              <span>Academic Progression & Focus</span>
            </h4>

            <div className="relative pl-6 space-y-6">
              {/* Timeline Line */}
              <div 
                className="absolute top-2 bottom-2 left-[7px] w-[2px] pointer-events-none"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(to bottom, #00f0ff, #2563eb 70%, rgba(255,255,255,0.1))'
                    : 'linear-gradient(to bottom, #0284c7, #1d4ed8 70%, rgba(0,0,0,0.1))'
                }}
              />

              {education.milestones.map((ms, idx) => (
                <div key={ms.year} className="relative group">
                  <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-cyan-500 border-2 border-white ring-2 ring-cyan-500/20" />
                  
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      theme === 'dark'
                        ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                        : 'text-cyan-800 bg-cyan-50 border-cyan-200'
                    }`}>
                      {ms.year}
                    </span>
                    <h5 className={`text-sm font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {ms.title}
                    </h5>
                  </div>
                  <p className={`text-xs mt-1 leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {ms.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
