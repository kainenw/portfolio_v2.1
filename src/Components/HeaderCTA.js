import React from 'react';
import CTAButton from './CTAButton/CTAButton';

function HeaderCTA() {
  return (
    <CTAButton variant="primary" size="medium" className="header-nav-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail contact-icon" aria-hidden="true">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      </svg>
      <span className="contact-text">Contact Me</span>
    </CTAButton>
  );
}

export default HeaderCTA;
