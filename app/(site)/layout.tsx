'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TimezoneList from '@/components/TimezoneList';
import Footer from '@/components/Footer';

const drawerWidth = 260;

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton
        selected={active}
        sx={{
          borderRadius: 1,
          px: 2.5,
          py: 1.2,
          '&.Mui-selected': {
            bgcolor: 'rgba(198,164,76,0.2)',
            color: 'primary.main',
          },
          '&.Mui-selected:hover': {
            bgcolor: 'rgba(198,164,76,0.3)',
          },
          '&:hover': { bgcolor: 'rgba(198,164,76,0.1)' },
        }}
      >
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            fontWeight: active ? 500 : 400,
            letterSpacing: 0.5,
          }}
        />
      </ListItemButton>
    </Link>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const localOffset = -new Date().getTimezoneOffset() / 60;
  const [selectedTimezone, setSelectedTimezone] = useState(localOffset);

  const sidebar = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        color="primary"
        sx={{
          letterSpacing: 2,
          textTransform: 'uppercase',
          mb: 3,
          fontWeight: 500,
        }}
      >
        The Binary Clock
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <List sx={{ mb: 3 }}>
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/learn" label="Learn" />
      </List>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <TimezoneList
          selectedTimezone={selectedTimezone}
          onSelectTimezone={setSelectedTimezone}
        />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '100vh' }}>
      <CssBaseline />

      {/* App Bar (mobile) */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          display: { md: 'none' },
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2 }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            sx={{
              letterSpacing: 1,
              color: 'primary.main',
              fontWeight: 500,
            }}
          >
            The Binary Clock
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (mobile) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {sidebar}
      </Drawer>

      {/* Drawer (desktop) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
        open
      >
        {sidebar}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowX: 'hidden',
          minWidth: 0,
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` },
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 2, sm: 3, md: 6 },
            py: { xs: 10, md: 4 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '960px',
            }}
          >
            {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
