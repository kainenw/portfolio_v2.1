// Accessibility testing configuration
module.exports = {
  // URLs to test
  urls: [
    'http://localhost:3000',
    'http://localhost:3000/about',
    'http://localhost:3000/projects',
    'http://localhost:3000/contact',
    'http://localhost:3000/projects/case-study/shopify-conversion-optimization',
    'http://localhost:3000/404-test' // 404 page
  ],
  
  // pa11y configuration
  pa11y: {
    standard: 'WCAG2AA',
    timeout: 30000,
    chromeLaunchConfig: {
      executablePath: undefined, // Use system Chrome
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    },
    actions: [
      'wait for element body to be visible'
    ]
  },

  // Lighthouse configuration
  lighthouse: {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['accessibility'],
      formFactor: 'desktop',
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1
      },
      screenEmulation: {
        mobile: false,
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
      }
    }
  },

  // axe-core configuration
  axe: {
    tags: ['wcag2a', 'wcag2aa', 'wcag21aa'],
    rules: {
      'color-contrast': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'keyboard-navigation': { enabled: true },
      'aria-allowed-attr': { enabled: true },
      'aria-required-children': { enabled: true },
      'aria-required-parent': { enabled: true },
      'aria-roles': { enabled: true },
      'aria-valid-attr': { enabled: true },
      'aria-valid-attr-value': { enabled: true },
      'button-name': { enabled: true },
      'bypass': { enabled: true },
      'document-title': { enabled: true },
      'duplicate-id': { enabled: true },
      'form-field-multiple-labels': { enabled: true },
      'frame-title': { enabled: true },
      'html-has-lang': { enabled: true },
      'html-lang-valid': { enabled: true },
      'image-alt': { enabled: true },
      'input-image-alt': { enabled: true },
      'label': { enabled: true },
      'landmark-banner-is-top-level': { enabled: true },
      'landmark-contentinfo-is-top-level': { enabled: true },
      'landmark-main-is-top-level': { enabled: true },
      'landmark-no-duplicate-banner': { enabled: true },
      'landmark-no-duplicate-contentinfo': { enabled: true },
      'landmark-one-main': { enabled: true },
      'link-name': { enabled: true },
      'list': { enabled: true },
      'listitem': { enabled: true },
      'meta-refresh': { enabled: true },
      'meta-viewport': { enabled: true },
      'page-has-heading-one': { enabled: true },
      'region': { enabled: true },
      'scope-attr-valid': { enabled: true },
      'server-side-image-map': { enabled: true },
      'tabindex': { enabled: true },
      'table-fake-caption': { enabled: true },
      'td-headers-attr': { enabled: true },
      'th-has-data-cells': { enabled: true },
      'valid-lang': { enabled: true },
      'video-caption': { enabled: true }
    }
  }
};
