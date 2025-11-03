'use client';

import { useState, useEffect } from 'react';
import Clock from '@/components/Clock';
import TimezoneList from '@/components/TimezoneList';
import ThemeToggle from '@/components/ThemeToggle';
import Toggle from '@/components/Toggle';
import Layout from '@/components/Layout';

type Mode = 'individual' | 'compare';

export default function Home() {
  const [selectedTimezone, setSelectedTimezone] = useState<number>(0);
  const [is24Hour, setIs24Hour] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>('individual');
  const [compareTimezone1, setCompareTimezone1] = useState<number>(0);
  const [compareTimezone2, setCompareTimezone2] = useState<number>(0);

  // Auto-detect local timezone on mount
  useEffect(() => {
    const localOffset = -new Date().getTimezoneOffset() / 60;
    setSelectedTimezone(localOffset);
    setCompareTimezone1(localOffset);
  }, []);

  const getTimezoneLabel = (offset: number): string => {
    if (offset === 0) return 'UTC+0 (Zulu)';
    const sign = offset >= 0 ? '+' : '';
    return `UTC${sign}${offset}`;
  };

  const getOffsetDifference = (): string => {
    const diff = compareTimezone1 - compareTimezone2;
    if (diff === 0) return 'are in the same timezone.';

    const absDiff = Math.abs(diff);
    const direction = diff > 0 ? 'ahead of' : 'behind';
    const hours = absDiff === 1 ? 'hour' : 'hours';

    return `is ${absDiff} ${hours} ${direction}`;
  };

  const sidebar = (
    <TimezoneList
      selectedTimezone={selectedTimezone}
      onSelectTimezone={setSelectedTimezone}
    />
  );

  return (
    <Layout sidebar={sidebar}>
      <div className="max-w-7xl mx-auto py-8">
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <ThemeToggle />
            <Toggle
              label1="12h"
              label2="24h"
              value={is24Hour}
              onChange={setIs24Hour}
            />
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 rounded-full p-1">
            <button
              onClick={() => setMode('individual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === 'individual'
                  ? 'bg-[#c6a44c] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-[#c6a44c]'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setMode('compare')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === 'compare'
                  ? 'bg-[#c6a44c] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-[#c6a44c]'
              }`}
            >
              Compare
            </button>
          </div>
        </div>

        {/* Individual Mode */}
        {mode === 'individual' && (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                Current Timezone
              </p>
              <h2 className="text-3xl font-light text-[#c6a44c] tracking-wide">
                {getTimezoneLabel(selectedTimezone)}
              </h2>
            </div>

            <Clock timezone={selectedTimezone} is24Hour={is24Hour} />
          </div>
        )}

        {/* Compare Mode */}
        {mode === 'compare' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Timezone 1 Selector */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Timezone 1
                </label>
                <select
                  value={compareTimezone1}
                  onChange={(e) => setCompareTimezone1(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-[#c6a44c] bg-transparent text-[#c6a44c] font-medium focus:outline-none focus:ring-2 focus:ring-[#c6a44c] focus:ring-opacity-50"
                >
                  {Array.from({ length: 27 }, (_, i) => i - 12).map((offset) => (
                    <option key={offset} value={offset} className="bg-white dark:bg-black">
                      {getTimezoneLabel(offset)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timezone 2 Selector */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Timezone 2
                </label>
                <select
                  value={compareTimezone2}
                  onChange={(e) => setCompareTimezone2(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-[#c6a44c] bg-transparent text-[#c6a44c] font-medium focus:outline-none focus:ring-2 focus:ring-[#c6a44c] focus:ring-opacity-50"
                >
                  {Array.from({ length: 27 }, (_, i) => i - 12).map((offset) => (
                    <option key={offset} value={offset} className="bg-white dark:bg-black">
                      {getTimezoneLabel(offset)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comparison Text */}
            <div className="text-center py-6 px-4 bg-[#c6a44c] bg-opacity-5 rounded-lg border border-[#c6a44c] border-opacity-30">
              <p className="text-lg md:text-xl">
                <span className="font-semibold text-[#c6a44c]">
                  {getTimezoneLabel(compareTimezone1)}
                </span>
                {' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {getOffsetDifference()}
                </span>
                {' '}
                <span className="font-semibold text-[#c6a44c]">
                  {getTimezoneLabel(compareTimezone2)}
                </span>
              </p>
            </div>

            {/* Show both clocks */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-light text-[#c6a44c] tracking-wide">
                  {getTimezoneLabel(compareTimezone1)}
                </h3>
                <div className="transform scale-75 origin-top">
                  <Clock timezone={compareTimezone1} is24Hour={is24Hour} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-center text-xl font-light text-[#c6a44c] tracking-wide">
                  {getTimezoneLabel(compareTimezone2)}
                </h3>
                <div className="transform scale-75 origin-top">
                  <Clock timezone={compareTimezone2} is24Hour={is24Hour} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
