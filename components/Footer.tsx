'use client';

import { Box, Typography, Link as MuiLink, useTheme, Chip } from '@mui/material';
import Link from 'next/link';
import packageJson from '@/package.json' assert { type: 'json' };

export default function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();
  const version = packageJson.version || 'v0.0.0';

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Learn', href: '/learn' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Report Bug', href: '/report' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.secondary,
      }}
    >
      {/* Navigation Links */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mb: 2,
        }}
      >
        {links.map((link, idx) => (
          <Box key={link.href} sx={{ display: 'flex', alignItems: 'center' }}>
            <MuiLink
              component={Link}
              href={link.href}
              underline="none"
              sx={{
                color: theme.palette.primary.main,
                fontSize: '0.9rem',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {link.label}
            </MuiLink>
            {idx < links.length - 1 && (
              <Typography
                component="span"
                sx={{
                  mx: 1,
                  color: theme.palette.text.disabled,
                }}
              >
                •
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          mb: 1,
          opacity: 0.8,
          fontSize: '0.85rem',
        }}
      >
        © {year} The Binary Clock. Designed by{' '}
        <MuiLink
          href="https://jpbranski.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 500,
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          JP Branski
        </MuiLink>
        . All rights reserved.
      </Typography>

      {/* Version Indicator */}
      <Chip
        size="small"
        label={`${version} • Stable Release`}
        sx={{
          mt: 1,
          fontSize: '0.75rem',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          opacity: 0.8,
          borderRadius: '8px',
        }}
      />
    </Box>
  );
}
