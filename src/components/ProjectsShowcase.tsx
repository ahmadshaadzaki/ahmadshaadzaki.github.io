'use client';

import { motion } from 'framer-motion';
import { FolderGit2, CheckCircle, TrendingUp, Code2, AlertCircle } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Key Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
            Key Projects & Lab Infrastructure Showcase
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-sans">
            Hands-on projects highlighting real-world problem solving, tech stack integration, and quantifiable metrics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((proj, pIdx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: pIdx * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 font-mono mb-1">
                    <span>PROJECT {pIdx + 1}</span>
                    <span>{proj.period}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Problem Solved Card */}
                <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="flex items-center space-x-1.5 font-semibold text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Problem Solved</span>
                  </div>
                  <p className="leading-relaxed">{proj.problemSolved}</p>
                </div>

                {/* Quantifiable Result Card */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/50 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
                  <div className="flex items-center space-x-1.5 font-semibold text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Quantifiable Result</span>
                  </div>
                  <p className="font-medium leading-relaxed">{proj.quantifiableResult}</p>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                    Execution Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                    {proj.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Tech Stack Footer Tags */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center space-x-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
