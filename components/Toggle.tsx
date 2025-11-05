'use client';

import { Box, Typography, Switch, useTheme } from '@mui/material';

interface ToggleProps {
  label1: string;
  label2: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({ label1, label2, value, onChange }: ToggleProps) {
  const theme = useTheme();

  return (
    <Box
      onClick={() => onChange(!value)}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 1,
        borderRadius: 999,
        border: `1px solid ${theme.palette.primary.main}`,
        cursor: 'pointer',
        userSelect: 'none',
        bgcolor: 'transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: (t) => t.palette.action.hover,
        },
      }}
      aria-label={`Toggle between ${label1} and ${label2}`}
    >
      <Typography
        variant="body2"
        sx={{
          color: !value
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
          opacity: !value ? 1 : 0.5,
          fontWeight: 500,
          transition: 'opacity 0.3s',
        }}
      >
        {label1}
      </Typography>

      <Switch
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        sx={{
          width: 42,
          height: 26,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0.5,
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: theme.palette.primary.main,
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary.main,
                opacity: 0.4,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            width: 20,
            height: 20,
            backgroundColor: theme.palette.primary.main,
          },
          '& .MuiSwitch-track': {
            borderRadius: 13,
            backgroundColor: 'rgba(255,255,255,0.2)',
          },
        }}
      />

      <Typography
        variant="body2"
        sx={{
          color: value
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
          opacity: value ? 1 : 0.5,
          fontWeight: 500,
          transition: 'opacity 0.3s',
        }}
      >
        {label2}
      </Typography>
    </Box>
  );
}
