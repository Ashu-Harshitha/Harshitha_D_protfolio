import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, theme }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 shadow-2xl z-10 ${
              theme === 'dark'
                ? 'bg-[#0a0d15] border-white/10 text-neutral-100 shadow-black/80'
                : 'bg-white border-neutral-200 text-neutral-900 shadow-xl'
            }`}
          >
            {/* Action Bar */}
            <div className={`flex items-center justify-between pb-6 mb-6 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
            }`}>
              <div className="flex items-center gap-2">
                <FileText className={`w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`} />
                <span className={`text-sm font-mono font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  Curriculum Vitae · Harshitha D
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  id="resume-print-btn"
                  className={`p-2 rounded-lg border transition-colors text-xs font-mono flex items-center gap-1.5 ${
                    theme === 'dark'
                      ? 'border-white/10 hover:bg-white/10 text-neutral-200'
                      : 'border-neutral-200 hover:bg-neutral-100 text-neutral-800'
                  }`}
                  title="Print / Save PDF"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print / Save</span>
                </button>

                <button
                  onClick={onClose}
                  className={`p-2 rounded-full border transition-colors ${
                    theme === 'dark'
                      ? 'border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white'
                      : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Printable Resume Content */}
            <div className="space-y-6 text-left">
              {/* Header */}
              <div>
                <h2 className={`text-3xl font-bold tracking-tight mb-1 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                  Harshitha D
                </h2>
                <p className={`text-sm font-mono font-semibold mb-2 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  Aspiring Software Engineer · Frontend & Full-Stack Development
                </p>
                <div className={`flex flex-wrap gap-4 text-xs font-mono ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  <span>Bangalore, India</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.email}</span>
                  <span>•</span>
                  <span>linkedin.com/in/harshitha-d-1063722a1</span>
                  <span>•</span>
                  <span>github.com/Ashu-Harshitha</span>
                </div>
              </div>

              {/* Summary */}
              <div className={`pt-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Profile Summary
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  Computer Science & Engineering student at Presidency University, Bangalore, with full-stack development experience from Bharat Electronics Limited (BEL) and TruTech Labs. Combines technical capability across React.js, Python, and mobile systems with strong professional work ethics, engineering accountability, and disciplined delivery.
                </p>
              </div>

              {/* Education */}
              <div className={`pt-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Education
                </h3>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Presidency University, Bangalore</h4>
                    <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Bachelor of Technology (B.Tech) — Computer Science & Engineering</p>
                  </div>
                  <span className={`text-xs font-mono font-semibold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>Expected 2027</span>
                </div>
              </div>

              {/* Experience */}
              <div className={`pt-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Experience
                </h3>
                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.company} className="space-y-1">
                      <div className="flex flex-wrap justify-between items-baseline">
                        <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                          {exp.role} · <span className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}>{exp.company}</span>
                        </h4>
                        <span className={`text-xs font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{exp.period}</span>
                      </div>
                      <p className={`text-xs italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{exp.division}</p>
                      <p className={`text-xs leading-relaxed mt-1 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>{exp.description}</p>
                      {exp.technologies && (
                        <p className={`text-[11px] font-mono mt-1 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`}>
                          Technologies: {exp.technologies.join(' · ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Projects */}
              <div className={`pt-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Key Projects
                </h3>
                <div className="space-y-3">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="text-xs">
                      <div className="flex justify-between items-baseline">
                        <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                          {proj.title} <span className={`font-normal italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>— {proj.tagline}</span>
                        </h4>
                        <span className={`font-mono text-[11px] font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`}>{proj.category}</span>
                      </div>
                      <p className={`mt-0.5 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>{proj.description}</p>
                      <div className={`flex flex-wrap gap-1 mt-1 text-[10px] font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        <span>Stack: {proj.technologies.join(' · ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className={`pt-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.name} className="flex gap-2">
                      <span className={`font-mono min-w-[85px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{cat.name}:</span>
                      <span className={theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}>{cat.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className={`pt-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                <h3 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-4 text-xs">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.title} className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                      <strong className={theme === 'dark' ? 'text-white' : 'text-neutral-900'}>{cert.title}</strong> — {cert.issuer}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className={`mt-8 pt-6 border-t flex justify-end gap-3 ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
              <button
                onClick={onClose}
                className={`px-5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  theme === 'dark'
                    ? 'border-white/10 text-neutral-300 hover:bg-white/5'
                    : 'border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                Close
              </button>
              <button
                onClick={handlePrint}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-600/30 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Download PDF</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
