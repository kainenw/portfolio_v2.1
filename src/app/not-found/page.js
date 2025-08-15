"use client";
import NotFoundClient from './NotFoundClient';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';
import Head from 'next/head';

function NotFound() {
  // Announce to screen readers that this is an error page
  useEffect(() => {
    document.title = '404 - Page Not Found | Kainen White';
    // Focus the main heading for screen readers
    const heading = document.querySelector('h1');
    if (heading) {
      heading.focus();
    }
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>
      <div className="NotFound Page">
        <main className="non-contrast-section" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <AlertCircle 
            size={64} 
            style={{ color: 'var(--accent-color, #007acc)', margin: '0 auto 2rem' }} 
            aria-hidden="true"
          />
          
          <h1 
            style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-color, #007acc)' }}
            tabIndex={-1}
            role="alert"
            aria-live="assertive"
          >
            404
          </h1>
          
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Page Not Found
          </h2>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <nav aria-label="Error page navigation" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/" 
              className="cta-btn" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Return to homepage"
            >
              <Home size={20} aria-hidden="true" />
              Go Home
            </Link>
            
            <Link 
              href="/Projects" 
              className="cta-btn" 
              style={{ background: 'transparent', color: 'var(--accent-color, #007acc)', border: '2px solid var(--accent-color, #007acc)' }}
              aria-label="View my design projects"
            >
              View Projects
            </Link>
            
            <Link 
              href="/Contact" 
              className="cta-btn" 
              style={{ background: 'transparent', color: 'var(--accent-color, #007acc)', border: '2px solid var(--accent-color, #007acc)' }}
              aria-label="Contact me for help"
            >
              Contact Me
            </Link>
          </nav>
        </main>
        
        <section className="contrast-section" style={{ textAlign: 'center' }}>
          <h3>Looking for something specific?</h3>
          <p>Here are some helpful links to get you back on track:</p>
          
          <nav 
            aria-label="Site navigation shortcuts"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '2rem auto' }}
            role="list"
          >
            <Link 
              href="/" 
              style={{ 
                padding: '1rem', 
                background: 'var(--card-background, #fff)', 
                border: '1px solid var(--border-color, #e0e0e0)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              role="listitem"
              aria-label="Go to homepage to start your journey"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', color: '#f9fdff' }}>Homepage</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Start your journey here</p>
            </Link>
            
            <Link 
              href="/About" 
              style={{ 
                padding: '1rem', 
                background: 'var(--card-background, #fff)', 
                border: '1px solid var(--border-color, #e0e0e0)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              role="listitem"
              aria-label="Learn about Kainen White's background and experience"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', color: '#f9fdff' }}>About Me</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Learn about my background</p>
            </Link>
            
            <Link 
              href="/Projects" 
              style={{ 
                padding: '1rem', 
                background: 'var(--card-background, #fff)', 
                border: '1px solid var(--border-color, #e0e0e0)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              role="listitem"
              aria-label="View Kainen White's design portfolio and case studies"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', color: '#f9fdff' }}>Projects</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>View my portfolio work</p>
            </Link>
            
            <Link 
              href="/Contact" 
              style={{ 
                padding: '1rem', 
                background: 'var(--card-background, #fff)', 
                border: '1px solid var(--border-color, #e0e0e0)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              role="listitem"
              aria-label="Contact Kainen White for collaboration or questions"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', color: '#f9fdff' }}>Contact</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Get in touch with me</p>
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}

export default NotFound;
