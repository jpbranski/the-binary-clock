'use client';

import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

interface TimezoneOption {
  offset: number;
  label: string;
  binaryLabel: string;
}

interface TimezoneListProps {
  selectedTimezone: number;
  onSelectTimezone: (offset: number) => void;
}

const timezones: TimezoneOption[] = [
  { offset: -12, label: 'UTC-12', binaryLabel: '1111 0100' },
  { offset: -11, label: 'UTC-11', binaryLabel: '1111 0101' },
  { offset: -10, label: 'UTC-10', binaryLabel: '1111 0110' },
  { offset: -9, label: 'UTC-9', binaryLabel: '1111 0111' },
  { offset: -8, label: 'UTC-8', binaryLabel: '1111 1000' },
  { offset: -7, label: 'UTC-7', binaryLabel: '1111 1001' },
  { offset: -6, label: 'UTC-6', binaryLabel: '1111 1010' },
  { offset: -5, label: 'UTC-5', binaryLabel: '1111 1011' },
  { offset: -4, label: 'UTC-4', binaryLabel: '1111 1100' },
  { offset: -3, label: 'UTC-3', binaryLabel: '1111 1101' },
  { offset: -2, label: 'UTC-2', binaryLabel: '1111 1110' },
  { offset: -1, label: 'UTC-1', binaryLabel: '1111 1111' },
  { offset: 0, label: 'UTC+0 (Zulu)', binaryLabel: '0000 0000' },
  { offset: 1, label: 'UTC+1', binaryLabel: '0000 0001' },
  { offset: 2, label: 'UTC+2', binaryLabel: '0000 0010' },
  { offset: 3, label: 'UTC+3', binaryLabel: '0000 0011' },
  { offset: 4, label: 'UTC+4', binaryLabel: '0000 0100' },
  { offset: 5, label: 'UTC+5', binaryLabel: '0000 0101' },
  { offset: 6, label: 'UTC+6', binaryLabel: '0000 0110' },
  { offset: 7, label: 'UTC+7', binaryLabel: '0000 0111' },
  { offset: 8, label: 'UTC+8', binaryLabel: '0000 1000' },
  { offset: 9, label: 'UTC+9', binaryLabel: '0000 1001' },
  { offset: 10, label: 'UTC+10', binaryLabel: '0000 1010' },
  { offset: 11, label: 'UTC+11', binaryLabel: '0000 1011' },
  { offset: 12, label: 'UTC+12', binaryLabel: '0000 1100' },
  { offset: 13, label: 'UTC+13', binaryLabel: '0000 1101' },
  { offset: 14, label: 'UTC+14', binaryLabel: '0000 1110' },
];

export default function TimezoneList({
  selectedTimezone,
  onSelectTimezone,
}: TimezoneListProps) {
  return (
    <Box
      sx={{
        maxHeight: '60vh',
        overflowY: 'auto',
        pr: 1,
        borderRadius: 2,
        '&::-webkit-scrollbar': { width: 6 },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.4),
          borderRadius: 6,
        },
      }}
    >
      <List
        dense
        subheader={
          <ListSubheader
            disableSticky
            sx={{
              bgcolor: 'background.paper',
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Timezones
          </ListSubheader>
        }
      >
        {timezones.map((tz, idx) => {
          const isActive = selectedTimezone === tz.offset;
          return (
            <ListItemButton
              key={`${tz.offset}-${idx}`}
              onClick={() => onSelectTimezone(tz.offset)}
              selected={isActive}
              sx={{
                borderRadius: 1,
                mb: 0.3,
                px: 2,
                py: 1,
                '&.Mui-selected': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
                  border: (theme) =>
                    `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                  '&:hover': {
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
                  },
                },
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: isActive ? 500 : 400 }}
                  >
                    {tz.label}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      opacity: 0.6,
                    }}
                  >
                    {tz.binaryLabel}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        })}
      </List>

      <Divider
        sx={{
          mt: 1.5,
          borderColor: (theme) => alpha(theme.palette.primary.main, 0.3),
        }}
      />
    </Box>
  );
}
