# ⏰ The Binary Clock

> **For those whose time is too precious for decimals.**

An absurdly elegant web application that displays time exclusively in binary format. Because numbers with digits are for peasants, and your time deserves to be told in the most unnecessarily sophisticated way possible.

## ✨ Overview

The Binary Clock is a luxury web experience that transforms the mundane act of checking the time into an exercise in digital elegance. Built with the precision of a Swiss watchmaker and the absurdist humor of someone who thinks binary clocks are actually practical.

**Philosophy:** Rolex × Hacker Terminal

This isn't just a clock. It's a statement. It says, "I have so much time that I can afford to decode it."

### Features

- 🎯 **Binary Time Display** - Hours, minutes, and seconds in pristine binary format
- 🌍 **Full Timezone Support** - UTC-12 to UTC+14, including Zulu time and AoE
- 🌓 **Dark/Light Mode** - Smooth transitions worthy of a luxury timepiece
- ⏰ **12/24 Hour Format** - For when you want *slightly* more readability
- 📊 **Compare Mode** - Compare two timezones because why not
- 📱 **Fully Responsive** - Luxury that fits in your pocket
- ✨ **Gold Accents** - Because subtlety is overrated (`#c6a44c`)
- 🎨 **Smooth Animations** - Every transition is a performance

## 🛠 Tech Stack

Built with bleeding-edge technology for maximum over-engineering:

- **Next.js 16** (App Router) - React framework
- **TypeScript** - Type safety for binary numbers
- **Tailwind CSS v4+** - Utility-first styling
- **lucide-react** - Beautiful icons
- **date-fns** - Time manipulation
- **next-sitemap** - SEO optimization

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to witness binary excellence.

### Build for Production

```bash
npm run build
npm run start
```

The build process automatically generates a sitemap and robots.txt via the `postbuild` script.

## 📦 Project Structure

```
/app
  /about          → About page with existential musings
  layout.tsx      → Root layout with metadata
  page.tsx        → Main clock interface
  globals.css     → Custom styles and theme
/components
  Clock.tsx           → Binary clock display
  TimezoneList.tsx    → Scrollable timezone selector
  Toggle.tsx          → Reusable toggle component
  ThemeToggle.tsx     → Light/dark mode switcher
  Layout.tsx          → Responsive layout with sidebar
/next-sitemap.config.js  → SEO configuration
```

## 🎨 Design System

### Colors

- **Gold**: `#c6a44c` - The color of luxury and judgment
- **Light Mode**: White background, black text, gold accents
- **Dark Mode**: Black background, white text, gold accents

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Style**: Geometric, crisp, confident

### Interactions

- Smooth cross-fade transitions (300ms)
- Gold glow effects on hover
- Custom gold scrollbar
- Pill-style toggles with sliding indicators

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Select Next.js framework
4. Deploy

That's it. Vercel handles everything automatically.

### Environment Variables (Optional)

```env
NEXT_PUBLIC_SITE_URL=https://thebinaryclock.com
```

Set this for proper sitemap generation in production.

## 📄 SEO & Sitemap

The project uses `next-sitemap` to automatically generate:

- `sitemap.xml` - Search engine sitemap
- `robots.txt` - Crawler directives

Configuration is in `next-sitemap.config.js`. The sitemap is generated automatically after each build via the `postbuild` script.

## 🎭 Philosophy

In a world obsessed with instant gratification, we dare to ask: *Why settle for conventional when you can have extraordinary?*

Each second is a statement. Each minute, a masterpiece. Every hour, an enigma.

**Luxury. Precision. Binary.**

## 📱 Responsive Design

### Desktop
- 25% width sidebar (fixed left) with timezone list
- 75% main content area with massive binary clock
- Theme and format toggles at the top
- Social icons at sidebar bottom

### Mobile
- Collapsible hamburger menu
- Slide-in drawer with full navigation
- Stacked vertical layout
- Preserved elegance with generous spacing

## 🔧 Features Breakdown

### Individual Mode
- Single timezone display
- Auto-detects local timezone on load
- Huge, centered binary clock
- Updates every second

### Compare Mode
- Two timezone dropdowns
- Shows time difference ("UTC+1 is 5 hours ahead of UTC-4")
- Displays both clocks side-by-side
- Real-time synchronized updates

### Timezone Support
- UTC-12 through UTC+14
- Zulu time (UTC+0)
- AoE (Anywhere on Earth)
- Binary representation of each offset

## 🎯 Browser Support

Modern browsers only. If you're using Internet Explorer, you probably can't read binary anyway.

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a work of art. Art doesn't need contributions—it needs admirers.

But if you find a bug, please let us know so we can pretend it was intentional.

## 📜 License

Time is free. But reading it in binary? Priceless.

---

**Made with ✨ and unnecessary complexity**

*"Time is an illusion. Lunchtime doubly so. Binary time? Now that's just showing off."*
