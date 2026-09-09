import React from 'react';
import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Layout, 
  Code2, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { APPROACH_STEPS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ApproachProps {
  theme: ThemeMode;
}

export const Approach: React.FC<ApproachProps> = ({ theme }) => {
  const stepIcons = [
    <Lightbulb className="w-5 h-5 text-amber-500" />,
    <Layout className={`w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`} />,
    <Code2 className={`w-5 h-5 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-700'}`} />,
    <Sparkles className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} />
  ];

  return (
    <section id="approach" className={`py-24 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
            <span>05 / METHODOLOGY</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            How I approach a problem.
          </h2>
          <p className={`mt-3 text-base max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            A disciplined engineering process balancing product intuition, system architecture, and iterative refinement.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                theme === 'dark'
                  ? 'bg-[#0a0d15]/90 border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20'
                  : 'bg-white border-neutral-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-neutral-200/50'
              }`}
            >
              {/* Background Step Watermark */}
              <span className="absolute -right-2 -top-3 font-display font-black text-6xl text-neutral-500/10 pointer-events-none select-none group-hover:text-cyan-500/15 transition-colors">
                {step.num}
              </span>

              <div>
                {/* Step Icon & Number Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl border ${
                    theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/20' : 'bg-cyan-50 border-cyan-200'
                  }`}>
                    {stepIcons[idx]}
                  </div>
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                    theme === 'dark'
                      ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                      : 'text-cyan-800 bg-cyan-50 border-cyan-200'
                  }`}>
                    STEP {step.num}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {step.title}
                </h3>

                {/* Prompt-mandated Step Quotation */}
                <blockquote className={`text-sm font-medium italic mb-4 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-800 font-semibold'
                }`}>
                  "{step.description}"
                </blockquote>

                {/* Elaborated engineering context */}
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {step.details}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-[11px] font-mono ${
                theme === 'dark' ? 'border-white/10 text-neutral-500' : 'border-neutral-200 text-neutral-600'
              }`}>
                <span>Phase 0{idx + 1}</span>
                <span className={`flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
                }`}>
                  Process flow <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
