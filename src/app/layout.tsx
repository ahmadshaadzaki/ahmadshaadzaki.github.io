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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Ahmad Shaad Zaki | IT Support & IAM Analyst Portfolio',
    description: 'Service Desk Associate & IT Support Engineer specializing in Active Directory DS, Windows Server, PowerShell automation, and IAM security lifecycle.',
    type: 'website',
  },
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon & Tab Logo Icons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        
        {/* Static HTML Security Meta Policies */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self';"
        />
      </head>
      <body className="min-h-screen bg-neo-bg dark:bg-neo-darkBg text-neo-text dark:text-neo-darkText antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
