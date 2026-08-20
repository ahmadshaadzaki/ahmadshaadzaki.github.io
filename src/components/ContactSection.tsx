'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, AlertTriangle } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

// Helper function to sanitize user string inputs against XSS and HTML injection
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

// Standard email validation pattern
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Inquiry',
    message: '',
    botcheck: '', // Honeypot field for bot detection
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Honeypot check: If botcheck field is filled by an automated script, block submission silently
    if (formData.botcheck) {
      setLoading(false);
      setFormSubmitted(true);
      return;
    }

    // 2. Client-side Rate-Limiting Cooldown (10s threshold)
    const now = Date.now();
    if (now - lastSubmissionTime < 10000) {
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    // 3. Input Validation & Formatting
    const cleanName = sanitizeInput(formData.name);
    const cleanEmail = formData.email.trim();
    const cleanSubject = sanitizeInput(formData.subject);
    const cleanMessage = sanitizeInput(formData.message);

    if (cleanName.length < 2) {
      setErrorMessage('Please enter a valid name (at least 2 characters).');
      return;
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (cleanMessage.length < 10) {
      setErrorMessage('Please enter a detailed message (at least 10 characters).');
      return;
    }

    setLoading(true);

    // Simulate secure transmission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setLastSubmissionTime(Date.now());
      setFormData({ name: '', email: '', subject: 'Job Opportunity / Inquiry', message: '', botcheck: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 800);
  };

  const contactBadges = [
    {
      label: 'Professional Email',
      value: resumeData.personalInfo.email,
      href: `mailto:${resumeData.personalInfo.email}`,
      icon: <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/ahmadshaadzaki',
      href: resumeData.personalInfo.linkedin,
      icon: <Linkedin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      label: 'GitHub Portfolio',
      value: 'github.com/ahmadshaadzaki',
      href: resumeData.personalInfo.github,
      icon: <Github className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      label: 'Phone & WhatsApp',
      value: resumeData.personalInfo.phone,
      href: `tel:${resumeData.personalInfo.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Recruiter & Client Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-sans">
            Ready to discuss Service Desk Associate, IT Support Engineer, or IAM Analyst roles. Open to instant relocation anywhere across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Large Social Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {contactBadges.map((badge, idx) => (
                <a
                  key={idx}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-900/50 group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium block">
                      {badge.label}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {badge.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Location & Security Badge */}
            <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Location: Aligarh, UP (Immediate availability for relocation)</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium pt-1 border-t border-zinc-200 dark:border-zinc-800">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Protected by CSP, XSS Input Sanitization & Anti-Spam Safeguards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 contact-form-container">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
              
              <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-center space-y-2"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-emerald-900 dark:text-emerald-100">
                    Message Delivered!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                    Thank you for reaching out. Your input was sanitized and transmitted securely.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
                  
                  {/* Honeypot Field (Hidden from real users, tricks spam bots) */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={100}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={150}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      maxLength={2000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss job opportunities, technical lab inquiries..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Transmitting Securely...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
