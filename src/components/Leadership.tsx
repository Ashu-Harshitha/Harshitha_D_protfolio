import React from 'react';
import { motion } from 'motion/react';
import { Users2, Mic, Globe, Sparkles } from 'lucide-react';
import { LEADERSHIP_ITEMS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface LeadershipProps {
  theme: ThemeMode;
}

export const Leadership: React.FC<LeadershipProps> = ({ theme }) => {
  return (
    <section id="leadership" className={`py-24 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
            <span>06 / IMPACT</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Beyond the IDE.
          </h2>
          <p className={`mt-3 text-base max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Leadership, event hosting, and active involvement across university campus initiatives.
          </p>
        </div>

        {/* Large Typography Statistics Grid (Editorial Format) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {LEADERSHIP_ITEMS.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-[#0c0f18] to-[#080a10] border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20'
                  : 'bg-white border-neutral-200 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <div>
                {/* Role Header Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                    theme === 'dark'
                      ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                      : 'text-cyan-800 bg-cyan-50 border-cyan-200'
                  }`}>
                    {item.role}
                  </span>
                  <span className={`text-xs font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    0{idx + 1}
                  </span>
                </div>

                {/* Massive Typography Stat */}
                <div className="mb-6">
                  <div className={`font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-white via-cyan-100 to-sky-400 bg-clip-text text-transparent' 
                      : 'text-neutral-900'
                  }`}>
                    {item.metric}
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-wider block mt-2 ${
                    theme === 'dark' ? 'text-cyan-400/80' : 'text-cyan-700 font-semibold'
                  }`}>
                    {item.stat}
                  </span>
                </div>

                {/* Exact Prompt Statement */}
                <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {item.description}
                </h3>
              </div>

              {/* Subtext Context */}
              <div className={`pt-6 mt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {item.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
