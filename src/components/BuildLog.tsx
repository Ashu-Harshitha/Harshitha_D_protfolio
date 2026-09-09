import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  X, 
  ChevronRight, 
  Sparkles, 
  RefreshCw, 
  Clock, 
  Tag,
  Circle
} from 'lucide-react';
import { BUILD_LOG_NOTES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface BuildLogProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const BuildLog: React.FC<BuildLogProps> = ({ isOpen, onClose, theme }) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const filteredNotes = selectedTag === 'ALL'
    ? BUILD_LOG_NOTES
    : BUILD_LOG_NOTES.filter(n => n.tag === selectedTag);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Terminal Window Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden z-10 font-mono ${
              theme === 'dark'
                ? 'bg-[#080b12] border-white/10 text-neutral-200 shadow-black/80'
                : 'bg-[#181a20] border-neutral-700 text-neutral-100 shadow-xl'
            }`}
          >
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d121c] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose}></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-xs text-neutral-400 font-mono ml-2 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>harshitha@terminal: ~/build-log</span>
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Content Body */}
            <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              
              {/* Terminal Greeting Line */}
              <div className="text-xs text-neutral-400 pb-3 border-b border-white/10">
                <p className="text-cyan-400 font-semibold mb-1">
                  $ cat /var/log/harshitha/build_notes.md
                </p>
                <p className="text-[11px] text-neutral-400">
                  Live developer micro-log · Short thoughts, current pursuits, and architectural learnings.
                </p>
              </div>

              {/* Developer Notes List */}
              <div className="space-y-3.5">
                {filteredNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex flex-col gap-2 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-bold tracking-wider">{note.date}</span>
                      </div>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wider ${
                        note.tag === 'FOCUS' 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : note.tag === 'SYSTEM'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {note.tag}
                      </span>
                    </div>

                    {/* Developer Note Quote */}
                    <blockquote className="text-sm font-sans text-white pl-4 border-l-2 border-cyan-500/40 italic">
                      "{note.content}"
                    </blockquote>
                  </div>
                ))}
              </div>

              {/* Live Terminal Prompt with Blinking Cursor */}
              <div className="pt-2 text-xs text-neutral-400 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">$</span>
                <span className="text-neutral-300">echo "Keep building with curiosity..."</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-500">
                <span>Session: Active</span>
                <span className="text-cyan-400">Branch: main (R&D)</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
