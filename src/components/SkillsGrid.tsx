'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldAlert, Wrench, Layers, CheckCircle2 } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function SkillsGrid() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Operating Systems')) return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (category.includes('Service Desk')) return <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (category.includes('Identity')) return <ShieldAlert className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    return <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
  };

  const getProficiencyStyle = (prof: string) => {
    switch (prof) {
      case 'Expert / Daily Use':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Advanced Lab':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Core Skill':
        return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700';
      case 'Actively Learning':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
            Core Skills Inventory
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-sans">
            Categorized technical capabilities spanning server administration, helpdesk operations, IAM security, and automation scripting.
          </p>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-900/50 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-white">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Cards List */}
              <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3 rounded-xl bg-zinc-50/70 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {skill.tag}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getProficiencyStyle(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Soft Skills Badges Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
            Core Professional & Interpersonal Attributes
          </h4>
          <div className="flex flex-wrap gap-2">
            {resumeData.softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
