// theme/index.ts
'use client';

import { alpha, createTheme } from '@mui/material/styles';

const gold = '#c6a44c';
const bg    = '#0d0d0d';
const paper = '#111111';
const text  = '#e6e6e6';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: gold },
    background: { default: bg, paper },
    text: { primary: text, secondary: alpha(text, 0.6) },
    divider: alpha(gold, 0.28),
  },
  typography: {
    fontFamily: 'Inter, system-ui, Arial, sans-serif',
    h1: { fontWeight: 300, letterSpacing: '0.08em' },
    h2: { fontWeight: 300, letterSpacing: '0.06em' },
    h3: { fontWeight: 300 },
    body1: { lineHeight: 1.7 },
    button: { textTransform: 'none', letterSpacing: '0.03em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: bg,
          color: text,
        },
        /* Gold selection + slim gold scrollbar */
        '::selection': { backgroundColor: alpha(gold, 0.32) },
        '*::-webkit-scrollbar': { width: 8, height: 8 },
        '*::-webkit-scrollbar-thumb': {
          background: alpha(gold, 0.55),
          borderRadius: 8,
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: alpha(gold, 0.75),
        },
        '*::-webkit-scrollbar-track': { background: '#121212' },
        a: { color: gold },
      },
    },

    /* Subtle gold accents on surfaces */
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: paper,
          border: `1px solid ${alpha(gold, 0.20)}`,
        },
      },
    },

    /* Buttons + IconButtons in gold */
    MuiButton: {
      defaultProps: { disableElevation: true, variant: 'contained' },
      styleOverrides: {
        root: { borderRadius: 10 },
        contained: {
          backgroundColor: gold,
          color: '#111',
          '&:hover': { backgroundColor: alpha(gold, 0.85) },
        },
        outlined: {
          borderColor: alpha(gold, 0.5),
          color: gold,
          '&:hover': { borderColor: gold, backgroundColor: alpha(gold, 0.08) },
        },
        text: { color: gold, '&:hover': { backgroundColor: alpha(gold, 0.08) } },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: { color: gold, '&:hover': { backgroundColor: alpha(gold, 0.1) } },
      },
    },

    /* List item selection = gold pill */
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': {
            color: gold,
            backgroundColor: alpha(gold, 0.18),
          },
          '&.Mui-selected:hover': {
            backgroundColor: alpha(gold, 0.24),
          },
        },
      },
    },

    /* Dividers in faint gold */
    MuiDivider: {
      styleOverrides: { root: { borderColor: alpha(gold, 0.28) } },
    },

    /* AppBar matches black background with gold text */
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: paper,
          borderBottom: `1px solid ${alpha(gold, 0.28)}`,
          color: gold,
        },
      },
    },
  },
});

export default theme;
