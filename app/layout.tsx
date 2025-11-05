import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Script from 'next/script';
import './globals.css';
import Analytics from './analytics';
import ThemeProviderClient from '@/theme/ThemeProviderClient';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Binary Clock',
    template: '%s | The Binary Clock',
  },
  description:
    'For those whose time is too precious for decimals. The Binary Clock redefines punctuality — one bit at a time.',
  keywords: ['binary clock', 'time', 'timezone', 'UTC', 'luxury', 'digital clock'],
  authors: [{ name: 'JP Branski', url: 'https://jpbranski.com' }],
  creator: 'JP Branski',
  publisher: 'JP Branski',
  metadataBase: new URL('https://www.thebinaryclock.com'),

  openGraph: {
    title: 'The Binary Clock',
    description:
      'Experience time in its purest form—ones, zeros, and golden light. Built by JP Branski.',
    url: 'https://www.thebinaryclock.com',
    siteName: 'The Binary Clock',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Binary Clock – minimalist binary timepiece',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Binary Clock',
    description: 'A minimalist timepiece built with Next.js and Material UI.',
    creator: '@jpbranski',
    images: ['/images/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* ✅ Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4062019424835259"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        <ThemeProviderClient>
          {children}
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
