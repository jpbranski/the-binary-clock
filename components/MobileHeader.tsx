'use client';

import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MobileHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileHeader({ isOpen, onToggle }: MobileHeaderProps) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'flex', md: 'none' }, // only show on mobile
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '1rem',
            color: theme.palette.primary.main,
          }}
        >
          The Binary Clock
        </Typography>

        <IconButton
          onClick={onToggle}
          sx={{
            color: theme.palette.primary.main,
            '&:hover': { backgroundColor: `${theme.palette.primary.main}22` },
          }}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
