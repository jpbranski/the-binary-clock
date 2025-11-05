'use client';

import { Box, Button, Typography, Paper } from '@mui/material';
import Link from 'next/link';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: 6,
          border: '1px solid rgba(198,164,76,0.3)',
          bgcolor: 'rgba(198,164,76,0.05)',
          maxWidth: 480,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 64,
            color: 'primary.main',
            mb: 2,
          }}
        />

        <Typography
          variant="h4"
          sx={{
            color: 'primary.main',
            fontWeight: 400,
            letterSpacing: 1,
            mb: 1,
          }}
        >
         0001 1001 0100 (404) — Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          Looks like this page got lost in time.  
          Perhaps it slipped into another timezone?
        </Typography>

        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{
            textTransform: 'none',
            px: 4,
            py: 1.2,
            fontWeight: 500,
            borderRadius: '999px',
            bgcolor: 'primary.main',
            color: '#fff',
            '&:hover': {
              bgcolor: 'rgba(198,164,76,0.9)',
            },
          }}
        >
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
}
