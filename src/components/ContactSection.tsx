'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Inquiry',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Job Opportunity / Inquiry', message: '' });
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

            {/* Location Badge */}
            <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center space-x-3 text-xs text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Current Location: Aligarh, UP (Immediate availability for relocation)</span>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 contact-form-container">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
              
              <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

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
                    Thank you for reaching out. Ahmad will get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins (Hiring Manager)"
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss job openings, interview scheduling, or technical lab inquiries..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending...</span>
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
