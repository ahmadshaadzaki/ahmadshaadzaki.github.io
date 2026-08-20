import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmad Shaad Zaki | IT Support & IAM Specialist Portfolio',
  description: 'Executive portfolio & interactive resume for Ahmad Shaad Zaki. Service Desk Associate, IT Helpdesk Engineer, and aspiring IAM Analyst specializing in Active Directory, Windows Server, PowerShell, and SC-900.',
  keywords: [
    'Ahmad Shaad Zaki',
    'Service Desk Associate',
    'IT Support Engineer',
    'IAM Analyst',
    'Active Directory',
    'Windows Server 2022',
    'PowerShell Scripting',
    'SC-900 Certification',
    'Resume Portfolio'
  ],
  authors: [{ name: 'Ahmad Shaad Zaki' }],
  openGraph: {
    title: 'Ahmad Shaad Zaki | IT Support & IAM Analyst Portfolio',
    description: 'Service Desk Associate & IT Support Engineer specializing in Active Directory DS, Windows Server, PowerShell automation, and IAM security lifecycle.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-neo-bg dark:bg-neo-darkBg text-neo-text dark:text-neo-darkText antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
