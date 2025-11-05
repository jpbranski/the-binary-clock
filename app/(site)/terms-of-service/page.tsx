'use client';

import { Box, Container, Typography, Divider } from '@mui/material';

export default function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Page Title */}
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
        Terms of Service for The Binary Clock
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}
      >
        Last Updated: November 5, 2025
      </Typography>

      {/* Introduction */}
      <Typography paragraph>
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using The Binary Clock
        website (the &ldquo;Site&rdquo;), operated solely by Jonathan “JP” Branski (&ldquo;Developer,&rdquo; &ldquo;us,&rdquo; or &ldquo;we&rdquo;).
      </Typography>

      <Typography paragraph>
        By accessing or using the Site, you agree to be bound by these Terms. If you disagree with
        any part of the terms, you may not access the Site.
      </Typography>

      <Divider sx={{ my: 4, borderColor: 'rgba(198,164,76,0.3)' }} />

      {/* 1. Purpose */}
      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        1. Purpose of the Site
      </Typography>
      <Typography paragraph>
        The Binary Clock is provided for educational, informational, and entertainment purposes
        only. The Site offers a real-time clock display using binary code and supplementary
        information to help users understand binary conversion. It is not intended for
        high-precision timekeeping and should not be relied upon for critical scheduling or
        operational needs.
      </Typography>

      {/* 2. IP */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        2. Intellectual Property (IP)
      </Typography>
      <Typography paragraph>
        <strong>Ownership:</strong> The Site, including all original content, features, and
        functionality (such as the design, code, and text) are and will remain the exclusive
        property of Jonathan “JP” Branski.
      </Typography>
      <Typography paragraph>
        <strong>Limited License:</strong> You are granted a limited, non-exclusive,
        non-transferable license to access and use the Site for your personal, non-commercial
        purposes only, subject to these Terms.
      </Typography>

      {/* 3. Third-Party */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        3. Third-Party Links and Services
      </Typography>
      <Typography paragraph>
        <strong>Affiliate and External Links:</strong> The Site contains links to external,
        third-party websites, including Amazon Affiliate links. These links are provided for
        convenience and monetization. We do not endorse, guarantee, or assume responsibility for the
        accuracy or practices of any third-party websites. You acknowledge and agree that we shall
        not be responsible or liable, directly or indirectly, for any damage or loss caused by or in
        connection with the use of or reliance on any such content, goods, or services available on
        or through any such websites.
      </Typography>
      <Typography paragraph>
        <strong>Advertising:</strong> Advertisements displayed on the Site are provided by
        third-party ad networks. We are not responsible for the content, privacy practices, or data
        collection of these third-party advertisers.
      </Typography>

      {/* 4. Disclaimer */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        4. Disclaimers and Limitation of Liability
      </Typography>
      <Typography paragraph>
        <strong>No Warranty:</strong> The Site is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis,
        without any warranties of any kind, express or implied. The Developer does not warrant that
        the content is accurate, reliable, or correct; that the Site will be available at any
        particular time or location; or that the Site is free of viruses or other harmful
        components.
      </Typography>
      <Typography paragraph>
        <strong>Limitation of Liability:</strong> In no event shall Jonathan “JP” Branski be liable
        for any indirect, incidental, special, consequential, or punitive damages, including without
        limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from
        (i) your access to or use of or inability to access or use the Site; (ii) any conduct or
        content of any third party on the Site; or (iii) unauthorized access, use, or alteration of
        your transmissions or content.
      </Typography>

      {/* 5. Governing Law */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        5. Governing Law
      </Typography>
      <Typography paragraph>
        These Terms shall be governed and construed in accordance with the laws of the United
        States, without regard to its conflict of law provisions.
      </Typography>

      {/* 6. Changes */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        6. Changes to Terms
      </Typography>
      <Typography paragraph>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        We will try to provide at least 30 days’ notice prior to any new terms taking effect. By
        continuing to access or use our Site after those revisions become effective, you agree to be
        bound by the revised terms.
      </Typography>

      {/* 7. Contact */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        7. Contact Information
      </Typography>
      <Typography paragraph>
        If you have any questions about these Terms, please contact the Developer:
      </Typography>

      <Box sx={{ pl: 3 }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Jonathan “JP” Branski
        </Typography>
        <Typography variant="body2" sx={{ color: 'primary.main' }}>
          dev@jpbranski.com
        </Typography>
      </Box>

      <Divider sx={{ my: 6, borderColor: 'rgba(198,164,76,0.3)' }} />

      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          fontStyle: 'italic',
          mt: 2,
        }}
      >
        The Binary Clock — precision in its purest form.
      </Typography>
    </Container>
  );
}
