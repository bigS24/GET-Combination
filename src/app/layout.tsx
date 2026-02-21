import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'GET for Digital Solutions',
    template: '%s | GET for Digital Solutions',
  },
  description: 'Automation that compounds your output. Products that scale your ambition. We build workflows, web apps, and AI solutions for growth-ready businesses.',
  keywords: ['automation', 'web development', 'AI workflows', 'MVP builds', 'digital agency', 'integration services'],
  authors: [{ name: 'GET for Digital Solutions' }],
  creator: 'GET for Digital Solutions',
  metadataBase: new URL('https://getfordigital.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getfordigital.com',
    siteName: 'GET for Digital Solutions',
    title: 'GET for Digital Solutions',
    description: 'Automation that compounds your output. Products that scale your ambition.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GET for Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GET for Digital Solutions',
    description: 'Automation that compounds your output. Products that scale your ambition.',
    creator: '@getfordigital',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
