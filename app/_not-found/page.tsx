// app/_not-found/page.tsx
'use client';

import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-semibold mb-4">404 — Not Found</h1>
        <p className="text-gray-500">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </Suspense>
  );
}
