# Next.js Accessibility Testing Migration Guide

## 🔄 Migrating Accessibility Automation to Next.js

### **Step 1: Update URLs in Test Configuration**

Your current accessibility tests target these URLs:
```javascript
const urls = [
    'http://localhost:3000',                    // → Same (Next.js default port)
    'http://localhost:3000/about',              // → Same
    'http://localhost:3000/projects',           // → Same
    'http://localhost:3000/contact',            // → Same
    'http://localhost:3000/projects/case-study/shopify-conversion-optimization'  // → Same
];
```

**Good news**: Next.js uses the same default port (3000), so URLs remain unchanged!

### **Step 2: Update npm Scripts for Next.js**

```json
{
  "scripts": {
    "dev": "next dev",                          // Replaces "start"
    "build": "next build",                      // Enhanced build
    "start": "next start",                      // Production server
    "export": "next export",                    // Static export (if needed)
    "test:accessibility": "./test-accessibility.sh",  // UNCHANGED
    "test:a11y": "npm run test:accessibility",         // UNCHANGED
    "precommit:accessibility": "npm run test:accessibility"  // UNCHANGED
  }
}
```

### **Step 3: Update GitHub Actions for Next.js**

```yaml
# .github/workflows/accessibility-testing.yml modifications
- name: Install dependencies
  run: npm ci

- name: Build the application
  run: npm run build                    # Next.js build

- name: Start the application  
  run: npm run start &                  # Next.js production server
  env:
    CI: true

- name: Wait for application to be ready
  run: |
    echo "Waiting for Next.js application to start..."
    npx wait-on http://localhost:3000 --timeout 60000
```

### **Step 4: Testing Script Compatibility**

Your `test-accessibility.sh` script will work **unchanged** with Next.js because:
- ✅ Same port (3000)
- ✅ Same URL structure  
- ✅ Same HTML output (React SSR → Next.js SSR)
- ✅ Same accessibility testing tools (pa11y, Lighthouse, axe-core)

### **Step 5: Enhanced Next.js Accessibility Features**

Next.js provides additional accessibility benefits:
```javascript
// Enhanced SEO and accessibility with Next.js Head
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Accessible Page Title</title>
        <meta name="description" content="Accessible description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Your page content */}
    </>
  )
}
```

### **Step 6: Migration Checklist**

#### Files to Copy/Migrate:
- ✅ `accessibility-test-config.js` → **Copy unchanged**
- ✅ `test-accessibility.sh` → **Copy unchanged**  
- ✅ `.github/workflows/accessibility-testing.yml` → **Minor updates**
- ✅ `pre-commit-accessibility-hook.sh` → **Copy unchanged**
- ✅ `setup-accessibility-automation.sh` → **Update npm scripts**
- ✅ All accessibility documentation → **Copy unchanged**

#### Testing Strategy:
1. **Copy all accessibility files** to Next.js project
2. **Update npm scripts** for Next.js commands
3. **Test locally**: `npm run test:accessibility`  
4. **Verify CI/CD**: Push to trigger GitHub Actions
5. **Validate results**: Ensure same accessibility compliance

### **Step 7: Next.js Specific Accessibility Enhancements**

```javascript
// next.config.js - Add accessibility-focused configurations
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enhanced accessibility reporting
  experimental: {
    optimizeCss: true,        // Better CSS optimization
    scrollRestoration: true,  // Accessible scroll behavior
  },
  // Image optimization for accessibility
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Security headers for accessibility compliance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

## 🎯 **Result: Zero Disruption to Accessibility Testing**

The beauty of your current accessibility automation is that it's **framework-agnostic**:
- Tests the final HTML output (not React/Next.js internals)
- Uses standard web URLs (not framework-specific routing)
- Validates WCAG compliance regardless of underlying technology

**Your accessibility automation will transfer seamlessly to Next.js!**
