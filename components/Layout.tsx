'use client';

import { Menu, X, Github, Linkedin, Globe } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--sidebar-bg)] border-b border-[var(--sidebar-border)] px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-wider text-[#c6a44c]">
            THE BINARY CLOCK
          </h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-[#c6a44c] hover:bg-opacity-10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar / Mobile Drawer */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-full md:w-1/4 bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)] z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } flex flex-col pt-20 md:pt-8 px-6 pb-6`}
      >
        {/* Title (Desktop only) */}
        <div className="hidden md:block mb-8">
          <h1 className="text-xl font-semibold tracking-wider text-[#c6a44c] uppercase">
            The Binary Clock
          </h1>
        </div>

        {/* Navigation */}
        <nav className="mb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive('/')
                ? 'bg-[#c6a44c] bg-opacity-20 text-[#c6a44c]'
                : 'hover:bg-[#c6a44c] hover:bg-opacity-10'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive('/about')
                ? 'bg-[#c6a44c] bg-opacity-20 text-[#c6a44c]'
                : 'hover:bg-[#c6a44c] hover:bg-opacity-10'
            }`}
          >
            About
          </Link>
        </nav>

        <div className="border-t border-[var(--sidebar-border)] my-4"></div>

        {/* Timezone List */}
        <div className="flex-1 overflow-hidden">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c6a44c] mb-3">
            Timezones
          </h2>
          {sidebar}
        </div>

        {/* Social Links */}
        <div className="mt-6 pt-4 border-t border-[var(--sidebar-border)]">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#c6a44c] rounded-lg hover:bg-[#c6a44c] hover:bg-opacity-10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-[#c6a44c]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#c6a44c] rounded-lg hover:bg-[#c6a44c] hover:bg-opacity-10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#c6a44c]" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#c6a44c] rounded-lg hover:bg-[#c6a44c] hover:bg-opacity-10 transition-all duration-200"
              aria-label="Website"
            >
              <Globe className="w-5 h-5 text-[#c6a44c]" />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20 md:pt-0 px-4 md:px-8">
        {children}
      </main>
    </div>
  );
}
