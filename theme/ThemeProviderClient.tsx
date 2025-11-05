// theme/ThemeProviderClient.tsx
'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';
import theme from './index';

export default function ThemeProviderClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
