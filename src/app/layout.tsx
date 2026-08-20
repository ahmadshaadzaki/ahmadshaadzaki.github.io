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
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/icon.svg?v=2', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
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
        {/* Cache-Busted Favicon & Tab Logo Icons */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        
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
