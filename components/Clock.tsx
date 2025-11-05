'use client';

import { useEffect, useState } from 'react';
import { addHours } from 'date-fns';
import { Box, Typography, useTheme, keyframes } from '@mui/material';

interface ClockProps {
  timezone: number; // UTC offset in hours
  is24Hour: boolean;
}

// --- gentle gold pulse animation ---
const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
`;

export default function Clock({ timezone, is24Hour }: ClockProps) {
  const [time, setTime] = useState(new Date());
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const toBinary = (num: number, pad = 8) => num.toString(2).padStart(pad, '0');
  const formatBinary = (b: string) => b.match(/.{1,4}/g)?.join(' ') ?? b;

  const utc = new Date(time.getTime() + time.getTimezoneOffset() * 60000);
  const adjusted = addHours(utc, timezone);

  let hours = adjusted.getHours();
  const minutes = adjusted.getMinutes();
  const seconds = adjusted.getSeconds();
  let period = '';

  if (!is24Hour) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  const hBin = formatBinary(toBinary(hours));
  const mBin = formatBinary(toBinary(minutes));
  const sBin = formatBinary(toBinary(seconds));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 300,
          letterSpacing: '0.15em',
          color: theme.palette.primary.main,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          fontSize: { xs: '1.8rem', sm: '2.6rem', md: '3rem', lg: '3.6rem' },
          whiteSpace: 'nowrap',
          animation: `${pulse} 2s ease-in-out infinite`,
          textShadow: `0 0 6px ${theme.palette.primary.main}33`,
        }}
      >
        {hBin}
        <Box component="span" sx={{ mx: 1 }}>
          :
        </Box>
        {mBin}
        <Box component="span" sx={{ mx: 1 }}>
          :
        </Box>
        {sBin}
        {!is24Hour && (
          <Box
            component="span"
            sx={{
              ml: 1.5,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              color: theme.palette.primary.main,
              fontWeight: 300,
              opacity: 0.8,
            }}
          >
            {period}
          </Box>
        )}
      </Typography>
    </Box>
  );
}
