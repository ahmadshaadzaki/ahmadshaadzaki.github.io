'use client';

import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Shield, CheckCircle2, ArrowRight, Terminal, Server } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="hero" className="relative py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Hiring & Relocation Across India</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                {resumeData.personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-emerald-600 dark:text-emerald-400 font-medium">
                {resumeData.personalInfo.headline}
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed pt-1">
                {resumeData.personalInfo.subheadline}
              </p>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans max-w-2xl">
              {resumeData.personalInfo.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium pt-1">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Microsoft SC-900 Aspirant</span>
              </div>
            </div>

            {/* Side-by-Side Prominent CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 cta-buttons">
              <button
                onClick={handlePrint}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>

          </motion.div>

          {/* Quick Metrics & Lab Overview Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-serif font-bold text-zinc-900 dark:text-white text-base">
                    Technical Profile Snapshot
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono">
                  B.Tech CSE '25
                </span>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {resumeData.personalInfo.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl font-bold font-serif text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Tech Highlights */}
              <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                  Core Speciality Focus
                </span>
                <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Active Directory Domain Services (OUs, GPOs, RBAC)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Tier 1/L1 Ticket Triage & User Troubleshooting</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>PowerShell User Provisioning & Administration Automation</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
