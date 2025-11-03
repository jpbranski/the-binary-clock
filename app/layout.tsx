import type { Metadata } from "next";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
