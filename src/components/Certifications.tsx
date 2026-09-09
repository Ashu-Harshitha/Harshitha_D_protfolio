import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface CertificationsProps {
  theme: ThemeMode;
}

export const Certifications: React.FC<CertificationsProps> = ({ theme }) => {
  return (
    <section id="certifications" className={`py-20 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
            <span>08 / CREDENTIALS</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Certifications
          </h2>
        </div>

        {/* Small Elegant Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group ${
                theme === 'dark'
                  ? 'bg-[#0a0d15]/90 border-white/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20'
                  : 'bg-white border-neutral-200 hover:border-cyan-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className={`p-3 rounded-xl border ${
                  theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                }`}>
                  <Award className="w-5 h-5" />
                </div>
                <div className={`flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${
                  theme === 'dark'
                    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                    : 'text-emerald-800 bg-emerald-50 border-emerald-200 font-semibold'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <h3 className={`text-xl font-bold tracking-tight mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>
                {cert.title}
              </h3>

              <p className={`text-sm font-semibold mb-3 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
              }`}>
                {cert.issuer}
              </p>

              <p className={`text-xs leading-relaxed ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {cert.focus}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
