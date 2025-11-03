'use client';

import { useEffect, useState } from 'react';
import { format, addHours } from 'date-fns';

interface ClockProps {
  timezone: number; // UTC offset in hours
  is24Hour: boolean;
}

export default function Clock({ timezone, is24Hour }: ClockProps) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toBinary = (num: number, padding: number = 8): string => {
    return num.toString(2).padStart(padding, '0');
  };

  const getAdjustedTime = () => {
    // Get current UTC time
    const utcTime = new Date(time.getTime() + time.getTimezoneOffset() * 60000);
    // Add the selected timezone offset
    return addHours(utcTime, timezone);
  };

  const adjustedTime = getAdjustedTime();
  let hours = adjustedTime.getHours();
  const minutes = adjustedTime.getMinutes();
  const seconds = adjustedTime.getSeconds();

  let period = '';
  if (!is24Hour) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  const hoursBinary = toBinary(hours, 8);
  const minutesBinary = toBinary(minutes, 8);
  const secondsBinary = toBinary(seconds, 8);

  // Split into groups of 4 for better readability
  const formatBinary = (binary: string): string => {
    return binary.match(/.{1,4}/g)?.join(' ') || binary;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-light tracking-wider text-[#c6a44c] font-mono">
              {formatBinary(hoursBinary)}
            </div>
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-widest">
              Hours ({hours.toString().padStart(2, '0')})
            </div>
          </div>

          <span className="text-5xl md:text-7xl font-light text-[#c6a44c]">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-light tracking-wider text-[#c6a44c] font-mono">
              {formatBinary(minutesBinary)}
            </div>
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-widest">
              Minutes ({minutes.toString().padStart(2, '0')})
            </div>
          </div>

          <span className="text-5xl md:text-7xl font-light text-[#c6a44c]">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-light tracking-wider text-[#c6a44c] font-mono">
              {formatBinary(secondsBinary)}
            </div>
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-widest">
              Seconds ({seconds.toString().padStart(2, '0')})
            </div>
          </div>

          {!is24Hour && (
            <div className="text-3xl md:text-5xl font-light text-[#c6a44c] ml-2">
              {period}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
