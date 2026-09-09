import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Music, PenTool, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_PASSIONS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface PersonalProps {
  theme: ThemeMode;
}

export const Personal: React.FC<PersonalProps> = ({ theme }) => {
  const [activePassion, setActivePassion] = useState<string>('reading');

  const iconsMap: Record<string, React.ReactNode> = {
    reading: <BookOpen className={`w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`} />,
    music: <Music className={`w-5 h-5 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-700'}`} />,
    writing: <PenTool className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} />
  };

  return (
    <section id="personal" className={`py-20 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
            <span>09 / PURSUITS</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            When I'm not coding...
          </h2>
          <p className={`mt-2 text-sm italic font-medium ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
          }`}>
            "Curiosity doesn't stop when the laptop closes."
          </p>
        </div>

        {/* Human Interests Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAL_PASSIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              onClick={() => setActivePassion(item.id)}
              className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative group ${
                activePassion === item.id
                  ? theme === 'dark'
                    ? 'bg-[#0e121e] border-cyan-500/50 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/20'
                    : 'bg-white border-cyan-400 shadow-md ring-2 ring-cyan-500/10'
                  : theme === 'dark'
                    ? 'bg-[#0a0d15]/80 border-white/10 hover:border-cyan-500/30'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl group-hover:scale-110 transition-transform ${
                  theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/20' : 'bg-cyan-50 border-cyan-200'
                }`}>
                  <span>{item.emoji}</span>
                </div>
                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-black/20' : 'bg-slate-100'}`}>
                  {iconsMap[item.id]}
                </div>
              </div>

              <h3 className={`text-xl font-bold tracking-tight mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>
                {item.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
