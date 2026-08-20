'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Download, Menu, X } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Experience & Labs', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="px-2.5 py-1 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform font-serif">
            ASZ
          </div>
          <div>
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white block leading-none">
              {resumeData.personalInfo.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
              IT Support & IAM Analyst
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <ThemeToggle />

          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-zinc-950 transition-all shadow-sm focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 dark:text-zinc-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
