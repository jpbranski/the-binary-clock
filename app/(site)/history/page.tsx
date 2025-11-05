'use client';

import { Container, Typography, Box, Divider, Button } from '@mui/material';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          color: 'primary.main',
          fontWeight: 400,
          mb: 3,
          textAlign: 'center',
          letterSpacing: 1,
        }}
      >
        The History of Binary
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}
      >
        From ancient symbols to digital symphonies
      </Typography>

      {/* Section 1 — Origins */}
      <Typography paragraph>
        Long before the age of silicon and circuitry, humanity sought elegant ways to represent
        numbers, logic, and thought itself. Among those methods, the binary system—built from just
        two digits, <strong>0</strong> and <strong>1</strong>—stands as one of the most profound
        inventions in intellectual history. While today it forms the invisible foundation of
        computing, its roots reach back centuries before the first transistor sparked to life.
      </Typography>

      <Typography paragraph>
        The concept of duality—light and dark, on and off, yes and no—has appeared across cultures
        and philosophies. In ancient China, the <em>I Ching</em> (Book of Changes) used combinations
        of broken and unbroken lines to represent states of balance and transformation. Each pair
        mirrored the binary principle: one line whole, one divided; one active, one passive. Though
        the <em>I Ching</em> was not a numerical system in the modern sense, it embodied the same
        two-state structure that would later underpin binary arithmetic.
      </Typography>

      {/* Section 2 — The Mathematicians */}
      <Divider sx={{ my: 4, borderColor: 'rgba(198,164,76,0.3)' }} />

      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        The Mathematicians Who Saw the Pattern
      </Typography>

      <Typography paragraph>
        The formalization of binary numbers is often credited to <strong>Gottfried Wilhelm Leibniz</strong>,
        the 17th-century philosopher and mathematician who also co-invented calculus. Inspired in
        part by the <em>I Ching</em>, Leibniz recognized that any number could be expressed through
        combinations of twos—where each digit’s position doubled in value. In 1703, he published
        <em>Explication de l&apos;Arithmétique Binaire</em>, demonstrating that binary arithmetic
        was not only mathematically consistent but metaphysically profound: a system where all
        creation could be reduced to something and nothing, existence and void.
      </Typography>

      <Typography paragraph>
        In the centuries that followed, the binary principle slept quietly within mathematical
        theory, awaiting a world ready to harness its potential. The 19th century saw early glimpses
        of that awakening. Visionaries like <strong>George Boole</strong> expanded binary logic into
        a framework for reasoning itself, creating what we now call <em>Boolean algebra</em>—the
        mathematical skeleton of all modern computation.
      </Typography>

      {/* Section 3 — The Digital Age */}
      <Divider sx={{ my: 4, borderColor: 'rgba(198,164,76,0.3)' }} />

      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        The Digital Revolution and Beyond
      </Typography>

      <Typography paragraph>
        When the first electronic computers emerged in the mid-20th century, engineers found in
        binary a perfect match for machines that could only recognize two states—on or off, current
        or no current. Binary’s simplicity became its superpower: an unambiguous, error-resistant
        way for circuits to communicate.
      </Typography>

      <Typography paragraph>
        Every letter you type, every color displayed on your screen, every melody streamed from your
        favorite song—all are expressed in sequences of 0s and 1s. A single byte (eight binary
        digits) can represent 256 different values, and billions of those combinations form the
        digital universe around us. Binary is not just a number system; it is the language of
        machines and the bridge between abstract logic and tangible experience.
      </Typography>

      {/* Section 4 — Philosophy */}
      <Divider sx={{ my: 4, borderColor: 'rgba(198,164,76,0.3)' }} />

      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        The Beauty of Simplicity
      </Typography>

      <Typography paragraph>
        What makes binary so enduring is its elegance. With only two symbols, it expresses infinite
        complexity. Its logic governs everything from microprocessors to quantum gates, and yet it
        remains profoundly human in essence—a reflection of the same dualities that shaped our
        earliest philosophies. The Binary Clock exists as both a playful homage and a quiet reminder
        of that harmony between simplicity and sophistication.
      </Typography>

      <Typography paragraph>
        Each flicker of gold light across its dark face echoes Leibniz&apos;s dream: that everything
        might be explained by the dance of ones and zeros, light and shadow, being and nothingness.
      </Typography>

      {/* External Link */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Link href="https://en.wikipedia.org/wiki/Binary_number" target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'rgba(198,164,76,0.15)',
              border: '1px solid rgba(198,164,76,0.5)',
              color: 'primary.main',
              fontWeight: 500,
              px: 4,
              py: 1.5,
              borderRadius: '999px',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(198,164,76,0.3)',
                borderColor: 'rgba(198,164,76,0.8)',
              },
            }}
          >
            Learn More on Wikipedia
          </Button>
        </Link>
      </Box>

      {/* Footer Quote */}
      <Divider sx={{ my: 6, borderColor: 'rgba(198,164,76,0.3)' }} />
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          fontStyle: 'italic',
        }}
      >
        &ldquo;Out of nothing and one, all creation arises.&rdquo; — Adapted from Leibniz
      </Typography>
    </Container>
  );
}
