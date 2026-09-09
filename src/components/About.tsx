import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, MapPin, Briefcase, Award, Heart, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutProps {
  theme: ThemeMode;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-neutral-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sub-Label & Section Heading */}
        <div className="mb-14">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-sky-600'
            }`}></span>
            <span>01 / ABOUT & PERSPECTIVE</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            More than just code.
          </h2>
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className={`text-lg sm:text-xl font-normal leading-relaxed ${
              theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
            }`}>
              I'm a <strong className={theme === 'dark' ? 'text-white' : 'text-neutral-950'}>Computer Science & Engineering student at Presidency University, Bangalore</strong>, passionate about turning ideas into useful, user-facing products.
            </p>

            <p className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              My experience spans frontend and full-stack development, mobile applications, backend integration, databases, and system-oriented projects. I enjoy understanding a problem deeply and transforming it into a clean, intuitive solution.
            </p>

            {/* Editorial Philosophy Statement Card */}
            <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#0c0f18] via-[#0e121e] to-[#0a0d14] border-cyan-500/20 text-white shadow-xl shadow-cyan-950/20'
                : 'bg-gradient-to-br from-sky-50/60 to-indigo-50/50 border-sky-200 text-neutral-900'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl shrink-0 mt-1 border ${
                  theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : 'bg-sky-100 text-sky-700 border-sky-200'
                }`}>
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[11px] font-mono uppercase tracking-wider block mb-1 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-sky-700 font-semibold'
                  }`}>
                    Guiding Philosophy
                  </span>
                  <blockquote className="text-lg sm:text-xl font-medium tracking-tight italic">
                    "{PERSONAL_INFO.philosophy}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Pillars / Competency Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className={`p-3.5 rounded-xl border text-center ${
                theme === 'dark' ? 'bg-[#0e111a] border-white/10 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-800 shadow-xs'
              }`}>
                <span className="block text-xs font-semibold">User-Centric UI</span>
                <span className={`text-[11px] font-mono ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-sky-700 font-medium'
                }`}>React & React Native</span>
              </div>
              <div className={`p-3.5 rounded-xl border text-center ${
                theme === 'dark' ? 'bg-[#0e111a] border-white/10 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-800 shadow-xs'
              }`}>
                <span className="block text-xs font-semibold">Full-Stack Core</span>
                <span className={`text-[11px] font-mono ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-sky-700 font-medium'
                }`}>TS, Java, Python</span>
              </div>
              <div className={`p-3.5 rounded-xl border text-center col-span-2 sm:col-span-1 ${
                theme === 'dark' ? 'bg-[#0e111a] border-white/10 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-800 shadow-xs'
              }`}>
                <span className="block text-xs font-semibold">R&D Foundation</span>
                <span className={`text-[11px] font-mono ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-sky-700 font-medium'
                }`}>Product Engineering</span>
              </div>
            </div>

          </div>

          {/* Right Column: "Currently" Card and Editorial Context */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Prompt-Specified "Currently / Recent Experience" Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`p-6 sm:p-7 rounded-2xl border shadow-lg relative overflow-hidden backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-[#0c0f18]/90 border-cyan-500/20 shadow-black/40'
                  : 'bg-white border-neutral-200 shadow-neutral-200/50'
              }`}
            >
              {/* Top Pulse Badge */}
              <div className={`flex items-center justify-between pb-4 mb-4 border-b ${
                theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className={`text-xs font-mono font-bold tracking-wider uppercase ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    RECENT MILESTONE
                  </span>
                </div>
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1 border ${
                  theme === 'dark'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                }`}>
                  <CheckCircle2 className={`w-3 h-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} />
                  <span>Completed Aug 2026</span>
                </span>
              </div>

              {/* Role & Company */}
              <div className="space-y-1 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={`text-xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {PERSONAL_INFO.currently.role}
                  </h3>
                </div>
                <p className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
                }`}>
                  {PERSONAL_INFO.currently.company}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                    theme === 'dark'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      : 'bg-sky-50 text-sky-800 border-sky-200'
                  }`}>
                    React.js Frontend
                  </span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                    theme === 'dark'
                      ? 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                      : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    Python Backend
                  </span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                    theme === 'dark'
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                      : 'bg-purple-50 text-purple-800 border-purple-200'
                  }`}>
                    Full-Stack
                  </span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                    theme === 'dark'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  }`}>
                    Workplace Ethics
                  </span>
                </div>
              </div>

              {/* Description of Full-Stack R&D Work */}
              <p className={`text-sm leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Architected and delivered an end-to-end full-stack web platform with React.js and Python. Contributed to BEL's Product Development & Innovation Wing, mastering disciplined engineering workflows, professional work ethics, and collaborative delivery.
              </p>

              <div className={`pt-3 border-t flex items-center justify-between text-xs font-mono ${
                theme === 'dark' ? 'border-white/10 text-neutral-400' : 'border-neutral-200 text-neutral-600'
              }`}>
                <span className="flex items-center gap-1.5">
                  <Briefcase className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} /> Product Dev & Innovation
                </span>
                <span className={`font-medium ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>Bangalore · Completed Aug 2026</span>
              </div>
            </motion.div>

            {/* Academic Snapshot Minimal Card */}
            <div className={`p-5 rounded-2xl border ${
              theme === 'dark' ? 'bg-[#0c0f18]/80 border-white/10 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-xs'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl border ${
                  theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : 'bg-sky-50 text-sky-700 border-sky-200'
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className={`text-[11px] font-mono uppercase block ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>Base & Campus</span>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                    Presidency University · Bangalore, India
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
