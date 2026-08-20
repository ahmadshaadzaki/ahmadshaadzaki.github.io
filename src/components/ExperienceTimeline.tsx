'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase, Server, Shield, Sparkles } from 'lucide-react';
import { resumeData, ExperienceItem } from '@/data/resumeData';

export default function ExperienceTimeline() {
  // All items expanded by default for full information density
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true,
    'exp-3': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getItemIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'lab':
        return <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'project':
        return <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Employment & Hands-on Labs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
            Interactive Career Timeline
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-sans">
            Chronological mapping of professional experience, enterprise virtual lab deployment, and IT service management practice.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8">
          
          {resumeData.experiences.map((exp, idx) => {
            const isExpanded = !!expandedItems[exp.id];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {getItemIcon(exp.type)}
                </div>

                {/* Main Card */}
                <div className="bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
                  
                  {/* Card Header & Toggle Trigger */}
                  <div 
                    onClick={() => toggleExpand(exp.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                          exp.type === 'work' 
                            ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300' 
                            : 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300'
                        }`}>
                          {exp.type === 'work' ? 'Work Experience' : 'Hands-on Lab'}
                        </span>
                      </div>
                      
                      <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 shrink-0">
                      <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                        {exp.period}
                      </span>
                      <button 
                        aria-label="Toggle details"
                        className="p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 no-print"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Expandable Details Block */}
                  <AnimatePresence>
                    {(isExpanded || true) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="timeline-details overflow-hidden pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-4"
                      >
                        {/* Bulleted Achievements */}
                        <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans">
                          {exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start space-x-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Metric Highlight */}
                        {exp.metrics && (
                          <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/50 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-medium flex items-center space-x-2">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide text-[10px]">Impact Metric:</span>
                            <span>{exp.metrics}</span>
                          </div>
                        )}

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
