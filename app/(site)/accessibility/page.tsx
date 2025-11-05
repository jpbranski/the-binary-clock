'use client';

import { Box, Container, Typography, Divider } from '@mui/material';

export default function AccessibilityPage() {
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
        Accessibility Statement for The Binary Clock
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}
      >
        Last Updated: November 5, 2025
      </Typography>

      {/* Introduction */}
      <Typography paragraph>
        The Binary Clock is committed to providing a website that is accessible to the
        widest possible audience, regardless of technology or ability. We are actively
        working to increase the accessibility and usability of our website and, in doing
        so, adhere to many of the available standards and guidelines.
      </Typography>

      <Divider sx={{ my: 4, borderColor: 'rgba(198,164,76,0.3)' }} />

      {/* Section 1 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        1. Conformance Status
      </Typography>
      <Typography paragraph>
        The Binary Clock aims to conform to the Web Content Accessibility Guidelines
        (WCAG) 2.1 Level AA. These guidelines explain how to make web content more
        accessible to people with disabilities, and conformance with these guidelines helps
        make the web more user-friendly for everyone.
      </Typography>

      {/* Section 2 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        2. Design and Visual Commitment
      </Typography>
      <Typography paragraph>
        The visual design of The Binary Clock relies on a high-contrast aesthetic to ensure
        readability:
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <strong>Color Contrast:</strong> The primary color scheme uses light, golden text
          on a dark background (WCAG minimum contrast ratio is met or exceeded) to ensure
          the binary numbers and main content are easily discernible for users with low
          vision.
        </li>
        <li>
          <strong>Minimalist Design:</strong> The layout is clean and uncluttered, reducing
          visual distractions and simplifying navigation for users with cognitive
          disabilities.
        </li>
        <li>
          <strong>Focus Indication:</strong> All interactive elements, such as navigation
          links, buttons (12h/24h), and input fields, have clearly visible focus states
          (usually a gold ring or highlight) to assist keyboard-only users.
        </li>
      </Box>

      {/* Section 3 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        3. Technical Features and Usability
      </Typography>
      <Typography paragraph>
        We strive to make the site fully functional for users employing assistive
        technologies:
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <strong>Semantic HTML:</strong> We use appropriate HTML elements (like
          &lt;h1&gt;, &lt;nav&gt;, &lt;button&gt;) to ensure screen readers can accurately
          interpret and navigate the content structure.
        </li>
        <li>
          <strong>Keyboard Navigation:</strong> All elements on the site can be accessed and
          operated using only the keyboard (e.g., using the Tab key to move between
          elements).
        </li>
        <li>
          <strong>Time Display (Non-Flashing):</strong> The clock display updates every
          second but does not include flashing or rapidly moving elements that could
          trigger seizures or cause discomfort. The rate of change is predictable and slow.
        </li>
        <li>
          <strong>Timezone Selection:</strong> The timezone list in the sidebar is
          implemented using standard, accessible elements to ensure proper labeling and
          click/tap targets.
        </li>
      </Box>

      {/* Section 4 */}
      <Typography variant="h5" sx={{ color: 'primary.main', mt: 4, mb: 2 }}>
        4. Feedback and Support
      </Typography>
      <Typography paragraph>
        We are continually seeking to improve the accessibility of the Site. If you
        encounter any barriers or have suggestions on how we can improve accessibility,
        please contact the developer.
      </Typography>

      <Box sx={{ pl: 3 }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Jonathan &ldquo;JP&rdquo; Branski
        </Typography>
        <Typography variant="body2" sx={{ color: 'primary.main', mb: 2 }}>
          dev@jpbranski.com
        </Typography>
      </Box>

      <Typography paragraph>
        We welcome your feedback and will work to address your concerns promptly.
      </Typography>

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
        The Binary Clock &mdash; accessibility through clarity and simplicity.
      </Typography>
    </Container>
  );
}
