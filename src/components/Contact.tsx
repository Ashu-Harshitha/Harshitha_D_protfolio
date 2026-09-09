import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight, 
  Copy, 
  Check, 
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ContactProps {
  theme: ThemeMode;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Let's%20Connect%20-%20Portfolio%20Inquiry&body=${encodeURIComponent(messageText)}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 3000);
  };

  return (
    <section id="contact" className={`py-24 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'} overflow-hidden`}>
      
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.35) 0%, rgba(37, 99, 235, 0.2) 60%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>10 / GET IN TOUCH</span>
          </div>
          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Let's build something meaningful.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            Have an idea, opportunity, or simply want to talk tech? I'd love to hear from you.
          </p>
        </div>

        {/* Big Interactive "Say hello →" CTA Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Interactive CTA Box */}
          <div className={`lg:col-span-7 p-8 sm:p-12 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#0c0f18] via-[#0b0e17] to-[#07090e] border-cyan-500/30 shadow-2xl shadow-cyan-950/30'
              : 'bg-gradient-to-br from-white to-sky-50/50 border-sky-200 shadow-xl shadow-sky-100/50'
          }`}>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Direct Dispatch</span>
              </div>

              {/* Large Interactive Email CTA with smooth arrow movement */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors"
                id="contact-say-hello-cta"
              >
                <span className={`transition-colors ${
                  theme === 'dark' ? 'text-white group-hover:text-cyan-400' : 'text-neutral-900 group-hover:text-cyan-600'
                }`}>
                  Say hello
                </span>
                <motion.span
                  className="inline-block text-cyan-400 group-hover:translate-x-3 transition-transform duration-300"
                >
                  →
                </motion.span>
              </a>

              <p className={`text-sm sm:text-base font-mono mb-8 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {PERSONAL_INFO.email}
              </p>
            </div>

            {/* Bottom 3 Quick Action Buttons */}
            <div className={`pt-6 border-t flex flex-wrap items-center gap-3 ${
              theme === 'dark' ? 'border-white/10' : 'border-sky-200'
            }`}>
              {/* Email Me Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="contact-email-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-sm shadow-cyan-600/30"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                id="contact-copy-email-btn"
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono border transition-colors ${
                  copied
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                    : theme === 'dark'
                      ? 'border-white/10 text-neutral-300 hover:border-cyan-500/40 hover:text-white'
                      : 'border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>

              {/* LinkedIn Button */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-btn"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-colors ${
                  theme === 'dark'
                    ? 'border-white/10 text-neutral-200 hover:border-cyan-400 hover:text-white'
                    : 'border-neutral-300 text-neutral-800 hover:border-neutral-400 hover:text-neutral-950'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-btn"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-colors ${
                  theme === 'dark'
                    ? 'border-white/10 text-neutral-200 hover:border-cyan-400 hover:text-white'
                    : 'border-neutral-300 text-neutral-800 hover:border-neutral-400 hover:text-neutral-950'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Message Composer Form */}
          <div className={`lg:col-span-5 p-8 rounded-3xl border flex flex-col justify-between ${
            theme === 'dark'
              ? 'bg-[#0a0d15]/90 border-white/10'
              : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Quick Note</span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                Drop a direct note
              </h3>
              <p className={`text-xs mb-4 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Send a message directly to my inbox via your preferred mail client.
              </p>

              <form onSubmit={handleSendMail} className="space-y-4">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Hi Harshitha, I came across your portfolio and wanted to talk about..."
                  rows={4}
                  required
                  className={`w-full p-3.5 rounded-xl text-xs sm:text-sm border focus:outline-hidden focus:ring-2 focus:ring-cyan-500/50 resize-none transition-all ${
                    theme === 'dark'
                      ? 'bg-black/40 border-white/10 text-neutral-200 placeholder-neutral-500'
                      : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
                  }`}
                />

                <button
                  type="submit"
                  id="contact-send-quick-note"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-600/30 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>

                {sentNotice && (
                  <p className="text-[11px] font-mono text-emerald-400 text-center animate-pulse">
                    Redirecting to your mail client...
                  </p>
                )}
              </form>
            </div>

            <div className={`pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
              theme === 'dark' ? 'border-white/10 text-neutral-500' : 'border-neutral-200 text-neutral-600'
            }`}>
              <span>Location: Bangalore, India</span>
              <span className="text-emerald-400">● Open for Opportunities</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
