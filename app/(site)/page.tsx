'use client';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Paper,
  Fade,
  Collapse,
} from '@mui/material';
import Clock from '@/components/Clock';
import TimezoneList from '@/components/TimezoneList';
import Toggle from '@/components/Toggle';
import { useTimezone } from '@/contexts/TimezoneContext';

export default function HomePage() {
  const {
    mode,
    setMode,
    selectedTimezone,
    is24Hour,
    setIs24Hour,
    compareTimezone1,
    setCompareTimezone1,
    compareTimezone2,
    setCompareTimezone2,
  } = useTimezone();

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

  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 6 }}>
      {/* Top Controls */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
          mb: 6,
        }}
      >
        {/* 12h / 24h Toggle */}
        <Toggle label1="12h" label2="24h" value={is24Hour} onChange={setIs24Hour} />

        {/* Mode Selector */}
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={(_, newMode) => newMode && setMode(newMode)}
          sx={{
            border: 'none',
            '& .MuiToggleButton-root': {
              textTransform: 'none',
              fontWeight: 500,
              px: 3,
              py: 1,
              color: 'text.secondary',
              border: 'none',
            },
            '& .Mui-selected': {
              bgcolor: 'rgba(198,164,76,0.2)',
              color: 'primary.main',
            },
          }}
        >
          <ToggleButton value="individual">Individual</ToggleButton>
          <ToggleButton value="compare">Compare</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Individual Mode */}
      <Fade in={mode === 'individual'} timeout={500} unmountOnExit>
        <Box textAlign="center">
          <Typography
            variant="subtitle1"
            sx={{ mb: 1, color: 'text.secondary', letterSpacing: 1 }}
          >
            Current Timezone
          </Typography>
          <Typography
            variant="h4"
            sx={{ mb: 4, color: 'primary.main', fontWeight: 300, letterSpacing: 1 }}
          >
            {getTimezoneLabel(selectedTimezone)}
          </Typography>

          <Clock timezone={selectedTimezone} is24Hour={is24Hour} />
        </Box>
      </Fade>

      {/* Compare Mode */}
      <Fade in={mode === 'compare'} timeout={500} unmountOnExit>
        <Box>
          {/* Selectors */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              mb: 5,
            }}
          >
            <FormControl fullWidth>
              <InputLabel>Timezone 1</InputLabel>
              <Select
                value={compareTimezone1}
                label="Timezone 1"
                onChange={(e) => setCompareTimezone1(Number(e.target.value))}
                sx={{
                  borderColor: 'rgba(198,164,76,0.5)',
                  color: 'primary.main',
                }}
              >
                {Array.from({ length: 27 }, (_, i) => i - 12).map((offset) => (
                  <MenuItem key={offset} value={offset}>
                    {getTimezoneLabel(offset)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Timezone 2</InputLabel>
              <Select
                value={compareTimezone2}
                label="Timezone 2"
                onChange={(e) => setCompareTimezone2(Number(e.target.value))}
                sx={{
                  borderColor: 'rgba(198,164,76,0.5)',
                  color: 'primary.main',
                }}
              >
                {Array.from({ length: 27 }, (_, i) => i - 12).map((offset) => (
                  <MenuItem key={offset} value={offset}>
                    {getTimezoneLabel(offset)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Comparison Summary */}
          <Paper
            elevation={0}
            sx={{
              textAlign: 'center',
              py: 3,
              px: 2,
              border: '1px solid rgba(198,164,76,0.3)',
              bgcolor: 'rgba(198,164,76,0.05)',
              mb: 4,
            }}
          >
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {getTimezoneLabel(compareTimezone1)}{' '}
              <Typography
                component="span"
                sx={{ color: 'text.secondary', fontWeight: 400 }}
              >
                {getOffsetDifference()}
              </Typography>{' '}
              {getTimezoneLabel(compareTimezone2)}
            </Typography>
          </Paper>

          {/* Centered Clocks */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              mt: 6,
              textAlign: 'center',
            }}
          >
            {[compareTimezone1, compareTimezone2].map((tz, i) => (
              <Box
                key={i}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontWeight: 300,
                    letterSpacing: 0.5,
                  }}
                >
                  {getTimezoneLabel(tz)}
                </Typography>
                <Clock timezone={tz} is24Hour={is24Hour} />
              </Box>
            ))}
          </Box>
        </Box>
      </Fade>

    </Box>
  );
}
