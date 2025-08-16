"use client"

import React from 'react';
import Link from 'next/link';
import './CTAButton.css';
import { Download } from 'lucide-react';

/**
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
 *   children: React.ReactNode;
 *   variant?: 'primary' | 'secondary';
 *   size?: 'small' | 'medium' | 'large';
 *   href?: string;
 *   onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
 *   download?: boolean;
 *   showDownloadIcon?: boolean;
 * }} CTAButtonProps
 */

/**
 * Call to action button that can render as a button or link.
 *
 * @param {CTAButtonProps} props
 * @returns {JSX.Element}
 */
function CTAButton({
  children,
  variant = 'primary', // 'primary' or 'secondary'
  size = 'medium', // 'small', 'medium', 'large'
  onClick = undefined,
  href = undefined,
  disabled = false,
  className = '',
  download = false,
  showDownloadIcon = false,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) {
  const baseClasses = `cta-button cta-${variant} cta-${size} ${className}`;

  // Download Resume functionality
  const handleDownload = (e) => {
    // If download prop is set, handle download logic
    if (download) {
      e.preventDefault();
      // Google Analytics tracking for resume downloads
      if (window.gtag) {
        window.gtag('event', 'resume_download', {
          event_category: 'Engagement',
          event_label: 'Resume Download',
          value: 1
        });
      }
      // Create download link
      const link = document.createElement('a');
      link.href = href || '/KainenWhite_Resume.pdf';
      link.download = 'KainenWhite_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (typeof onClick === 'function') onClick(e);
      return;
    }
    // Otherwise, handle as normal link
    if (typeof onClick === 'function') onClick(e);
  };

  // Use next/link for internal links
  const isInternal = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http');

  if (href && typeof href === 'string' && href.length > 0) {
    if (isInternal && !download) {
      return (
        <Link
          href={href}
          className={baseClasses}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          {...props}
        >
          {showDownloadIcon && <Download size={20} style={{ marginRight: '0.5rem' }} aria-hidden="true" />}
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={handleDownload}
        download={download ? 'KainenWhite_Resume.pdf' : undefined}
        aria-label={ariaLabel || (download ? 'Download Kainen White Resume PDF' : undefined)}
        aria-describedby={ariaDescribedBy}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
        {...props}
      >
        {showDownloadIcon && <Download size={20} style={{ marginRight: '0.5rem' }} aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={download ? handleDownload : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      type={type}
      {...props}
    >
      {showDownloadIcon && <Download size={20} style={{ marginRight: '0.5rem' }} aria-hidden="true" />}
      {children}
    </button>
  );
}

export default CTAButton;
