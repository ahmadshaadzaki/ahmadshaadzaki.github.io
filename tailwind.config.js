/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FAF9F6',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          muted: '#666666',
          border: '#E2E8F0',
          darkBg: '#090D16',
          darkSurface: '#111827',
          darkText: '#F3F4F6',
          darkMuted: '#9CA3AF',
          darkBorder: '#1F2937',
          accent: '#10B981', // Emerald green
          accentHover: '#059669',
          accentLight: '#D1FAE5',
          accentDark: '#064E3B',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
