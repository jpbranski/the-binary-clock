'use client';

import Link from 'next/link';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(198,164,76,0.2)',
        py: 4,
        mt: 8,
        textAlign: 'center',
        bgcolor: 'background.default',
      }}
    >
      {/* Top Link Row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Learn', href: '/learn' },
          { label: 'History', href: '/history' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Accessibility', href: '/accessibility' },
          { label: 'Report Bug', href: '/report' },
        ].map((link, i, arr) => (
          <Box key={link.href} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Link
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'rgba(198,164,76,0.9)',
                fontWeight: 400,
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
              }}
            >
              {link.label}
            </Link>
            {i !== arr.length - 1 && (
              <Typography sx={{ color: 'rgba(198,164,76,0.5)' }}>•</Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Icon Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        <IconButton
          component="a"
          href="https://jpbranski.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit jpbranski.com"
          sx={{
            color: 'rgba(198,164,76,0.8)',
            transition: 'all 0.3s ease',
            '&:hover': { color: 'rgba(198,164,76,1)', transform: 'scale(1.1)' },
          }}
        >
          <LanguageIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/jonathanbranski/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{
            color: 'rgba(198,164,76,0.8)',
            transition: 'all 0.3s ease',
            '&:hover': { color: 'rgba(198,164,76,1)', transform: 'scale(1.1)' },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/jpbranski"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{
            color: 'rgba(198,164,76,0.8)',
            transition: 'all 0.3s ease',
            '&:hover': { color: 'rgba(198,164,76,1)', transform: 'scale(1.1)' },
          }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:dev@jpbranski.com"
          aria-label="Email"
          sx={{
            color: 'rgba(198,164,76,0.8)',
            transition: 'all 0.3s ease',
            '&:hover': { color: 'rgba(198,164,76,1)', transform: 'scale(1.1)' },
          }}
        >
          <MailOutlineIcon />
        </IconButton>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: 'rgba(198,164,76,0.2)', mb: 2 }} />

      {/* Bottom Text */}
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        &copy; 2025 The Binary Clock. Designed by{' '}
        <Link
          href="https://jpbranski.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'rgba(198,164,76,0.9)',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          JP Branski
        </Link>
        . All rights reserved.
      </Typography>

      <Typography
        variant="caption"
        sx={{
          display: 'inline-block',
          mt: 1,
          px: 1.5,
          py: 0.5,
          border: '1px solid rgba(198,164,76,0.4)',
          borderRadius: '12px',
          color: 'rgba(198,164,76,0.9)',
        }}
      >
        0.1.0 • Stable Release
      </Typography>
    </Box>
  );
}
