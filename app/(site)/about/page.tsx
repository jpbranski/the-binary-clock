'use client';

import { Box, Typography, Divider, Container, Button } from '@mui/material';
import { useCallback, useMemo } from 'react';

export default function AboutPage() {
  const affiliateLinks = useMemo(
    () => [
      'https://amzn.to/4oWZ8ew', // 12 Inch Day of Week Wall Clock
      'https://amzn.to/4nGdJKm', // Recycled HDD Desk Clock
      'https://amzn.to/3JGYWRz', // Sharper Image® LED Word Clock
      'https://amzn.to/3WFgnVE', // Abdurey Retro Old Telephone Wall Clock
      'https://amzn.to/47mQMXC', // Casio CA53W Vintage Series
      'https://amzn.to/4r0Pfyn', // FANMIS Creative Mens Binary Matrix
      'https://amzn.to/3WHL3Wa', // CIGA Design Planet U Series
      'https://amzn.to/43aCHKn', // T-ENGINE Wrist Watches
      'https://amzn.to/4oyNXc3', // SHENGKE Creative Watch Ultra-Thin
    ],
    []
  );

  const handleAffiliateClick = useCallback(() => {
    const random = Math.floor(Math.random() * affiliateLinks.length);
    window.open(affiliateLinks[random], '_blank', 'noopener,noreferrer');
  }, [affiliateLinks]);
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 6, md: 10 },
        color: 'text.primary',
        textAlign: 'center',
      }}
    >
      {/* --- Header --- */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 300,
          mb: 3,
          color: 'primary.main',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        About The Binary Clock
      </Typography>

      <Divider
        sx={{
          width: 100,
          mx: 'auto',
          my: 4,
          borderColor: 'rgba(198,164,76,0.4)',
        }}
      />

      {/* --- Main Content --- */}
      <Box sx={{ textAlign: 'justify', mb: 6 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 4,
            color: 'text.secondary',
          }}
        >
          Time has always been one of humanity’s most universal obsessions—counted,
          measured, and interpreted in a thousand ways.{' '}
          <strong>The Binary Clock</strong> takes that idea and translates it into its
          purest digital form, reducing each passing moment to patterns of ones and zeros.
          It’s a tribute to both simplicity and precision—a visual language for those who
          appreciate logic, rhythm, and design.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 4,
            color: 'text.secondary',
          }}
        >
          Each digit you see represents a combination of electrical truths—on or off,
          yes or no, one or zero. Beneath every clock, calendar, and microprocessor, time
          ultimately flows through binary. This project brings that hidden structure to
          light, offering an interface that feels simultaneously mathematical and
          meditative. The goal isn’t just to tell time—it’s to let you experience its
          patterns.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 4,
            color: 'text.secondary',
          }}
        >
          The Binary Clock was built with <strong>Next.js</strong>, <strong>React</strong>,
          and <strong>Material UI</strong>, designed to be both elegant and efficient. The
          interface uses muted tones and golden highlights to reflect a sense of precision
          and timelessness—echoing the aesthetic of luxury timepieces. It’s not meant to
          compete with your calendar app or wristwatch, but to remind you that beauty can
          exist in data itself.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          Whether you’re a programmer, designer, engineer, or simply someone fascinated by
          patterns, <strong>The Binary Clock</strong> offers a new way to perceive time—
          not as numbers on a screen, but as an ongoing computation. Because even the most
          complex systems begin with something simple: one, zero, and the space in between.
        </Typography>
      </Box>

      {/* --- Affiliate Section --- */}
      <Divider
        sx={{
          width: '100%',
          mx: 'auto',
          my: 6,
          borderColor: 'rgba(198,164,76,0.25)',
        }}
      />

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          onClick={handleAffiliateClick}
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
            borderWidth: 2,
            px: 5,
            py: 1.8,
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: '0.95rem',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            textTransform: 'uppercase',
            transition: 'all 0.25s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(198,164,76,0.1)',
              borderColor: 'rgba(198,164,76,0.8)',
              transform: 'translateY(-3px)',
              boxShadow: '0 0 10px rgba(198,164,76,0.4)',
            },
          }}
        >
          Explore Curated Timepieces
        </Button>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 2.5,
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.8rem',
            lineHeight: 1.5,
            maxWidth: 480,
            mx: 'auto',
          }}
        >
          This button is an Amazon Affiliate link. It will present you with one of our
          editorially chosen destinations for unique timepieces. We may earn a small
          commission on qualifying purchases.
        </Typography>
      </Box>
    </Container>
  );
}
