import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Rabbit Hole 🐇 | Free Web3 & AI Courses',
  description:
    'Fall down the rabbit hole. Master Telegram, TON blockchain, and AI agents with free interactive courses. From zero to builder.',
  openGraph: {
    title: 'The Rabbit Hole 🐇',
    description: 'Free courses on Telegram, TON blockchain, and AI agents. Fall in, level up.',
    siteName: 'The Rabbit Hole',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rabbit Hole 🐇 | Free Web3 & AI Courses',
    description: 'Fall down the rabbit hole. Master Telegram, TON, and AI agents.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
