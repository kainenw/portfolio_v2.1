"use client"; // The Header must be a client component to use context and handle clicks.

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FolderOpen, User, Mail, Sun, Moon } from 'lucide-react'; // Import Mail, Sun, and Moon icons
import CTAButton from '../CTAButton/CTAButton'; // Import CTAButton component
import { useTheme } from 'next-themes';
import './Header.css';

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering on the server to prevent hydration mismatches
    return null;
  }

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleContactClick = () => {
    router.push('/Contact');
  };

  // Helper function to determine if a link is active
  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname === path) return true;
    return false;
  };

  return (
    <header className="App-header" role="banner" suppressHydrationWarning>
      {/* Logo/Brand */}
      <Link 
        href="/" 
        className={`header-logo header-nav-item ${isActive('/') ? 'active' : ''}`}
        aria-label="Home - Kainen White Portfolio"
      >
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="logo-text">KW</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav role="navigation" aria-label="Main navigation" style={{ display: 'contents' }}>
        <Link 
          href="/Projects" 
          className={`header-nav-item ${isActive('/Projects') ? 'active' : ''}`}
          aria-label="View projects portfolio"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FolderOpen size={20} style={{ marginBottom: '2px' }} aria-hidden="true" />
            <span className="nav-link-text">projects</span>
          </span>
        </Link>
        <Link 
          href="/About" 
          className={`header-nav-item ${isActive('/About') ? 'active' : ''}`}
          aria-label="Learn about Kainen White"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <User size={20} style={{ marginBottom: '2px' }} aria-hidden="true" />
            <span className="nav-link-text">about</span>
          </span>
        </Link>
      </nav>

      {/* Contact CTA Button */}
      <CTAButton 
        variant="primary" 
        size="medium" 
        className={`header-nav-item ${isActive('/Contact') ? 'active' : ''}`}
        onClick={handleContactClick}
        aria-label="Contact Kainen White for opportunities"
      >
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Mail size={20} className="contact-icon" aria-hidden="true" />
          <span className="contact-text">contact</span>
        </span>
      </CTAButton>

      {/* Theme Toggle Button */}
      <button
        className="ThemeMenu header-nav-item"
        onClick={handleThemeToggle}
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        aria-pressed={resolvedTheme === 'dark'}
        type="button"
      >
        {resolvedTheme === 'dark' ? (
          <Moon size={20} aria-hidden="true" />
        ) : (
          <Sun size={20} aria-hidden="true" />
        )}
        <span className="sr-only">
          Current theme: {resolvedTheme === 'dark' ? 'Dark' : 'Light'} mode
        </span>
      </button>
    </header>
  );
}