import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Analytics from "./analytics";

export const metadata: Metadata = {
  title: "The Binary Clock - Luxury Time in Binary",
  description: "For those whose time is too precious for decimals. The Binary Clock redefines punctuality — one bit at a time.",
  keywords: ["binary clock", "time", "timezone", "UTC", "luxury", "digital clock"],
  authors: [{ name: "The Binary Clock" }],
  openGraph: {
    title: "The Binary Clock",
    description: "Luxury time in binary. For those whose time is too precious for decimals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4062019424835259"
          crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
