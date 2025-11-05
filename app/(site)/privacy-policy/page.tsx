'use client';

import { Box, Container, Typography, Divider } from '@mui/material';

export default function PrivacyPage() {
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
        Privacy Policy for The Binary Clock
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}
      >
        Last Updated: November 5, 2025
      </Typography>

      {/* Introduction */}
      <Typography paragraph>
        This Privacy Policy applies to the website <strong>The Binary Clock</strong> (the
        &ldquo;Site&rdquo;), developed and operated solely by Jonathan “JP” Branski.
      </Typography>
      <Typography paragraph>
        We are committed to maintaining the trust and confidence of all visitors to our
        website. This policy outlines what data is collected, how it is used, and with
        whom it may be shared.
      </Typography>

      <Divider sx={{ my: 4, borderColor: 'rgba(198,164,76,0.3)' }} />

      {/* Section 1 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        1. Data Collection and Use
      </Typography>
      <Typography paragraph>
        We do not directly collect any personal data from you.
      </Typography>
      <Typography paragraph>
        The Binary Clock does not use user accounts, registration forms, cookies for
        tracking preferences, or any features that require inputting personal
        information (such as names or email addresses). The Site’s core functionality does
        not rely on storing or processing any user-provided data.
      </Typography>

      {/* Section 2 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        2. Third-Party Data Collection
      </Typography>
      <Typography paragraph>
        We utilize third-party services which may collect limited, non-personally
        identifiable data to help us understand site performance and support the
        operational costs of the Site through analytics and affiliate marketing.
      </Typography>

      {/* Subsection A */}
      <Typography variant="h6" sx={{ color: 'primary.main', mt: 3, mb: 1 }}>
        A. Google Analytics (Site Performance)
      </Typography>
      <Typography paragraph>
        We use Google Analytics to understand how the Site is being used, such as which
        pages are popular and how long visitors stay. Google Analytics may collect
        information such as:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 2 }}>
        <li>Your anonymized IP address</li>
        <li>Browser type and operating system</li>
        <li>Referring pages</li>
        <li>General location data (geographic region)</li>
      </Box>
      <Typography paragraph>
        This information is used solely to improve the user experience and the design of
        the Site. Your individual behavior is never analyzed or stored by us.
      </Typography>

      {/* Subsection B */}
      <Typography variant="h6" sx={{ color: 'primary.main', mt: 3, mb: 1 }}>
        B. Advertising and Affiliate Links
      </Typography>
      <Typography paragraph>
        The Site displays third-party advertisements and contains Amazon Affiliate links,
        primarily through the “Explore Curated Timepieces” button.
      </Typography>
      <Typography paragraph>
        <strong>Affiliate Links:</strong> When you click on an Amazon Affiliate link on
        our Site, you are redirected to Amazon&apos;s platform. Amazon may use cookies or
        similar technologies to track referrals from our Site and may collect data related
        to your interaction with their platform. We receive a small commission on
        qualifying purchases made after clicking these links. We do not receive or store
        any personal data related to your purchase or browsing history on Amazon.
      </Typography>
      <Typography paragraph>
        <strong>Advertisements:</strong> Some ads displayed on the Site may be served by
        third-party ad networks. These networks may use tracking technologies (like
        cookies) to deliver personalized ads based on your prior browsing activity. We are
        not responsible for the privacy practices of these external advertisers.
      </Typography>

      {/* Section 3 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        3. Contact Information
      </Typography>
      <Typography paragraph>
        If you have any questions about this Privacy Policy or the data practices of The
        Binary Clock, please contact:
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

      {/* Footer */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          fontStyle: 'italic',
          mt: 2,
        }}
      >
        The Binary Clock — where precision meets simplicity.
      </Typography>
    </Container>
  );
}
