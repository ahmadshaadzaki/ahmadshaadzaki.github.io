import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsGrid from '@/components/SkillsGrid';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import EducationCerts from '@/components/EducationCerts';
import ContactSection from '@/components/ContactSection';
import PrintResumeView from '@/components/PrintResumeView';
import { resumeData } from '@/data/resumeData';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Web Interactive View */}
      <div className="print-container">
        <Navbar />
        <main>
          <Hero />
          <ExperienceTimeline />
          <SkillsGrid />
          <ProjectsShowcase />
          <EducationCerts />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 dark:text-zinc-400 no-print">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#hero" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Back to Top ↑
              </a>
              <span>•</span>
              <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                LinkedIn
              </a>
              <span>•</span>
              <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Direct Executive Print Resume View */}
      <PrintResumeView />
    </div>
  );
}
