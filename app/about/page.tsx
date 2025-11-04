// app/about/page.tsx
'use client';

import { useState } from 'react';
import TimezoneList from '@/components/TimezoneList';
import Layout from '@/components/Layout';

export default function About() {
  const [selectedTimezone, setSelectedTimezone] = useState<number>(0);

  const sidebar = (
    <TimezoneList
      selectedTimezone={selectedTimezone}
      onSelectTimezone={setSelectedTimezone}
    />
  );

  return (
    <Layout sidebar={sidebar}>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-8 py-16">
          <div className="text-center space-y-12">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-light tracking-wide text-[#c6a44c] mb-8">
              The Binary Clock
            </h1>

            {/* Decorative line */}
            <div className="w-32 h-px bg-[#c6a44c] mx-auto"></div>

            {/* Main content */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed">
              <p className="text-gray-700 dark:text-gray-300 font-light">
                For those whose time is too precious for decimals.
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-light">
                The Binary Clock redefines punctuality — one bit at a time.
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-32 h-px bg-[#c6a44c] mx-auto"></div>

            {/* Additional content */}
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 font-light">
              <p>
                In a world obsessed with instant gratification, we dare to ask:{' '}
                <span className="italic text-[#c6a44c]">
                  Why settle for conventional when you can have extraordinary?
                </span>
              </p>

              <p>
                Each second is a statement. Each minute, a masterpiece.{' '}
                <span className="text-[#c6a44c]">Every hour, an enigma.</span>
              </p>

              <p className="text-sm uppercase tracking-[0.3em] text-[#c6a44c] font-medium pt-8">
                Luxury. Precision. Binary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
