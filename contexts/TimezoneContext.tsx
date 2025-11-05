'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Mode = 'individual' | 'compare';

interface TimezoneContextType {
  // Mode state
  mode: Mode;
  setMode: (mode: Mode) => void;

  // Individual mode timezone
  selectedTimezone: number;
  setSelectedTimezone: (timezone: number) => void;

  // Compare mode timezones
  compareTimezone1: number;
  setCompareTimezone1: (timezone: number) => void;
  compareTimezone2: number;
  setCompareTimezone2: (timezone: number) => void;

  // Display format
  is24Hour: boolean;
  setIs24Hour: (is24Hour: boolean) => void;
}

const TimezoneContext = createContext<TimezoneContextType | undefined>(undefined);

export function TimezoneProvider({ children }: { children: ReactNode }) {
  // Get local timezone offset
  const localOffset = -new Date().getTimezoneOffset() / 60;

  // Mode state
  const [mode, setMode] = useState<Mode>('individual');

  // Individual mode timezone
  const [selectedTimezone, setSelectedTimezone] = useState(localOffset);

  // Compare mode timezones
  const [compareTimezone1, setCompareTimezone1] = useState(localOffset);
  const [compareTimezone2, setCompareTimezone2] = useState(0);

  // Display format
  const [is24Hour, setIs24Hour] = useState(false);

  return (
    <TimezoneContext.Provider
      value={{
        mode,
        setMode,
        selectedTimezone,
        setSelectedTimezone,
        compareTimezone1,
        setCompareTimezone1,
        compareTimezone2,
        setCompareTimezone2,
        is24Hour,
        setIs24Hour,
      }}
    >
      {children}
    </TimezoneContext.Provider>
  );
}

export function useTimezone() {
  const context = useContext(TimezoneContext);
  if (context === undefined) {
    throw new Error('useTimezone must be used within a TimezoneProvider');
  }
  return context;
}
