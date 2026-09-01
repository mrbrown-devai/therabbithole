import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { JsonLd, SITE_NAME, SITE_URL, siteJsonLd } from '../lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Rabbit Hole — Free Web3, Crypto & AI Courses',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Free, visual, step-by-step courses on Web3: tokenized stocks and RWAs, DN404 and NFTs, TON and Telegram, and AI agents. No signup, no paywall.',
  keywords: [
    'free web3 courses',
    'crypto course',
    'tokenized stocks',
    'RWA tokenization',
    'DN404',
    'TON blockchain',
    'Telegram Web3',
    'AI agents',
    'learn crypto free',
  ],
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'The Rabbit Hole — Free Web3, Crypto & AI Courses',
    description:
      'Tokenized stocks, DN404, TON, Telegram and AI agents. Free interactive courses. Fall in, level up.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rabbit Hole — Free Web3, Crypto & AI Courses',
    description: 'Tokenized stocks, DN404, TON and AI agents. Free interactive courses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
  },
};

export const viewport = {
  themeColor: '#0a0a0f',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
        <JsonLd data={siteJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}
