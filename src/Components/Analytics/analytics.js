// Google Analytics Enhanced Ecommerce and Events
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-EV8432PHGL', {
      page_path: path,
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track portfolio interactions
export const trackProjectView = (projectName) => {
  trackEvent('view_project', 'Portfolio', projectName);
};

export const trackContactFormSubmission = () => {
  trackEvent('contact_form_submit', 'Contact', 'Form Submission', 1);
};

export const trackDownloadResume = () => {
  trackEvent('download', 'Resume', 'PDF Download', 1);
};

export const trackExternalLink = (linkName, destination) => {
  trackEvent('click', 'External Link', `${linkName} - ${destination}`);
};

export const trackCTAClick = (ctaText, location) => {
  trackEvent('click', 'CTA', `${ctaText} - ${location}`);
};

// Enhanced ecommerce for service inquiries
export const trackServiceInquiry = (serviceName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: 0,
      items: [{
        item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
        item_name: serviceName,
        item_category: 'Design Service',
        quantity: 1,
      }]
    });
  }
};
