'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function EducationCerts() {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
                  Academic Education
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Degrees and university qualifications
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                        {edu.institution}
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 shrink-0">
                      {edu.year}
                    </span>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Academic Score: {edu.score}
                    </span>
                    <span className="inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Learning Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
                  Certifications & Self-Study
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Industry certifications and technical learning focus
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-emerald-500/40 dark:border-emerald-800/60 shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {cert.issuer}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug mt-1.5">
                        {cert.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 shrink-0 font-medium">
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                    Focused study on Security, Compliance, and Identity (SCI) fundamentals, Azure AD/Entra ID concepts, role-based access control (RBAC), and compliance governance.
                  </p>
                </div>
              ))}

              {/* Learning Roadmap Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="w-4 h-4" />
                  <span>Current Self-Study Roadmap</span>
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Microsoft 365 Exchange Online & Teams Admin Basics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>ITIL Foundation v4 Framework for ITSM Service Desk</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Advanced PowerShell Automation for AD & Office 365</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
