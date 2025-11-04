'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: [command: string, targetId: string, config?: Record<string, unknown>]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!GA_ID) return;

    const url = pathname + searchParams.toString();
    // Send page_view to GA
    window.gtag?.('config', GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams, GA_ID]);

  return null;
}
