'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function LearnPage() {
  const [decimal, setDecimal] = useState<number | string>(0);

  const toBinary = (num: number): string => num.toString(2).padStart(6, '0');

  const binaryValue =
    !isNaN(Number(decimal)) && Number(decimal) >= 0
      ? toBinary(Number(decimal))
      : 'Invalid';

  const cheatSheet = Array.from({ length: 61 }, (_, i) => ({
    decimal: i,
    binary: toBinary(i),
  }));

  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 6, md: 10 },
        color: 'text.primary',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 300,
          mb: 2,
          color: 'primary.main',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        Learn Binary
      </Typography>

      <Divider
        sx={{
          width: 100,
          mx: 'auto',
          my: 3,
          borderColor: 'rgba(198,164,76,0.4)',
        }}
      />

      {/* Converter */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
          Convert a decimal number to binary:
        </Typography>
        <TextField
          type="number"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
          variant="outlined"
          inputProps={{ min: 0 }}
          sx={{
            width: '200px',
            input: { textAlign: 'center', color: 'primary.main', fontSize: '1.2rem' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(198,164,76,0.5)' },
              '&:hover fieldset': { borderColor: 'rgba(198,164,76,0.8)' },
            },
          }}
        />
        <Typography
          variant="h5"
          sx={{
            mt: 3,
            color: 'primary.main',
            fontFamily: 'monospace',
            letterSpacing: 4,
          }}
        >
          {binaryValue}
        </Typography>
      </Box>

      {/* Educational Section */}
      <Box sx={{ textAlign: 'justify', color: 'text.secondary', mb: 6 }}>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Binary is the foundation of all digital logic. It uses only two digits—<strong>0</strong> and <strong>1</strong>—each representing an “off” or “on” state. Every piece of data your computer stores, every signal your processor sends, and every image you see on a screen ultimately reduces to these two values.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          To convert from decimal (base-10) to binary (base-2), start with your number and repeatedly divide by two, recording the remainders. Reading those remainders from bottom to top gives the binary equivalent. For example, the number 13 in binary is <code>1101</code>—which equals <code>8 + 4 + 1</code>.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Converting back is just as easy: each binary digit represents a power of two. Multiply each “1” by its positional value and sum the results. This process forms the backbone of all modern computing—everything from simple calculators to quantum processors still relies on this pattern of logic.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Once you learn to “see” binary, you’ll start noticing it everywhere—time, data, encryption, even art. The Binary Clock is a playful example of how elegant this language can be: precise, rhythmic, and endlessly interpretable.
        </Typography>
      </Box>

      {/* Cheat Sheet */}
      <Divider
        sx={{
          width: 80,
          mx: 'auto',
          my: 5,
          borderColor: 'rgba(198,164,76,0.3)',
        }}
      />

      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: 'primary.main',
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        Decimal → Binary (0–60)
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'transparent',
          border: '1px solid rgba(198,164,76,0.3)',
          maxHeight: 400,
          overflowY: 'auto',
          '&::-webkit-scrollbar': { width: '0.4em' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(198,164,76,0.3)' },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(198,164,76,0.3)',
                }}
              >
                Decimal
              </TableCell>
              <TableCell
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(198,164,76,0.3)',
                }}
              >
                Binary
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cheatSheet.map((item) => (
              <TableRow key={item.decimal}>
                <TableCell
                  sx={{
                    textAlign: 'center',
                    color: 'text.primary',
                    borderBottom: '1px solid rgba(198,164,76,0.1)',
                  }}
                >
                  {item.decimal}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    color: 'primary.main',
                    letterSpacing: 2,
                    borderBottom: '1px solid rgba(198,164,76,0.1)',
                  }}
                >
                  {item.binary}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
