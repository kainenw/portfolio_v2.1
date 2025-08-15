# Accessibility Testing Checklist

## Overview
This checklist ensures ongoing WCAG 2.1 AA compliance for the portfolio website. Use this document for regular accessibility audits and before deploying any changes.

## Automated Testing Tools

### Required Tools
- **pa11y**: `npm install -g pa11y`
- **Lighthouse**: Built into Chrome DevTools or `npm install -g lighthouse`
- **axe DevTools**: Browser extension for Chrome/Firefox

### Running Automated Tests

#### pa11y Testing
```bash
# Install pa11y globally
npm install -g pa11y

# Test individual pages
pa11y http://localhost:3000
pa11y http://localhost:3000/about
pa11y http://localhost:3000/projects
pa11y http://localhost:3000/contact

# Generate reports
pa11y --reporter html http://localhost:3000 > pa11y-home.html
```

#### Lighthouse Testing
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run accessibility audit
lighthouse http://localhost:3000 --only-categories=accessibility --output=html --output-path=lighthouse-accessibility.html
```

#### Project-Specific Testing Script
```bash
# Use the existing test script
./test-accessibility.sh
```

## Manual Testing Checklist

### ✅ Keyboard Navigation Testing

#### Basic Navigation
- [ ] **Tab Order**: Sequential and logical tab order through all interactive elements
- [ ] **Focus Indicators**: Visible focus indicators on all interactive elements
- [ ] **Skip Links**: "Skip to main content" link appears and functions on Tab
- [ ] **Trapped Focus**: Focus remains within modals when open
- [ ] **Return Focus**: Focus returns to trigger element when modals close

#### Navigation Elements
- [ ] **Header Navigation**: All links accessible via keyboard
- [ ] **Main Menu**: Can navigate entire menu with keyboard only
- [ ] **Footer Links**: All footer links reachable and functional
- [ ] **CTA Buttons**: All call-to-action buttons activate with Enter/Space
- [ ] **Form Elements**: All inputs, buttons, and form controls accessible

#### Interactive Components
- [ ] **Project Cards**: Can navigate and activate project links
- [ ] **Contact Form**: Complete form submission possible with keyboard only
- [ ] **Theme Toggle**: Theme switching works with keyboard
- [ ] **Tab Switches**: Project/design tabs work with arrow keys or Enter

### ✅ Screen Reader Testing

#### Content Structure
- [ ] **Headings**: Logical heading hierarchy (H1 → H2 → H3)
- [ ] **Landmarks**: Page regions properly identified (header, nav, main, footer)
- [ ] **Lists**: Lists properly marked up and announced
- [ ] **Tables**: Data tables have proper headers and captions (if any)

#### Images and Media
- [ ] **Alt Text**: All informative images have descriptive alt text
- [ ] **Decorative Images**: Decorative images have empty alt="" or aria-hidden="true"
- [ ] **Icons**: Icons have proper labels or are marked as decorative
- [ ] **Complex Images**: Charts/diagrams have detailed descriptions

#### Interactive Elements
- [ ] **Links**: Link purposes are clear from context or aria-label
- [ ] **Buttons**: Button functions are clear and descriptive
- [ ] **Form Labels**: All form inputs have associated labels
- [ ] **Error Messages**: Form errors are announced and associated with inputs

### ✅ Visual and Zoom Testing

#### Text and Contrast
- [ ] **Text Scaling**: Content readable and functional at 200% zoom
- [ ] **Contrast Ratios**: All text meets 4.5:1 contrast minimum
- [ ] **Color Dependency**: Information not conveyed by color alone
- [ ] **Text Spacing**: Text remains readable with custom spacing

#### Layout and Responsive Design
- [ ] **Horizontal Scrolling**: No horizontal scrolling at 200% zoom
- [ ] **Content Reflow**: Content reflows properly at different zoom levels
- [ ] **Mobile Accessibility**: Touch targets at least 44px × 44px
- [ ] **Responsive Navigation**: Navigation remains accessible on all screen sizes

### ✅ Motion and Animation Testing

#### Animation Preferences
- [ ] **Reduced Motion**: Respects `prefers-reduced-motion: reduce`
- [ ] **Essential Animation**: Only essential animations remain with reduced motion
- [ ] **No Seizure Risk**: No flashing content or rapidly changing elements
- [ ] **Auto-play**: No auto-playing media without user control

## Color Contrast Testing

### Tools for Contrast Testing
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Colour Contrast Analyser**: Desktop application
- **Browser DevTools**: Built-in contrast checking

### Minimum Requirements
- **Normal Text**: 4.5:1 contrast ratio minimum
- **Large Text** (18pt+): 3:1 contrast ratio minimum
- **UI Components**: 3:1 contrast ratio minimum
- **Focus Indicators**: 3:1 contrast ratio minimum

### Current Color Combinations to Test
```css
/* Light Theme */
--text-color: #343A40 on --card-background: #FFFFFF ✅
--primary-accent: #005A9C on --card-background: #FFFFFF ✅
--cta-color: #007BFF on --card-background: #FFFFFF ✅

/* Dark Theme */
--text-color: #F7FAFC on --card-background: #171717 ✅
--primary-accent: #2B6CB0 on --card-background: #171717 ✅
--cta-color: #4299E1 on --card-background: #171717 ✅

/* Fixed High-Contrast Elements */
CTA Buttons: #000c16 background with #fff text ✅
```

## Browser and Device Testing

### Supported Browsers
- [ ] **Chrome** (latest 2 versions)
- [ ] **Firefox** (latest 2 versions)
- [ ] **Safari** (latest 2 versions)
- [ ] **Edge** (latest 2 versions)

### Device Testing
- [ ] **Desktop**: Full functionality with mouse and keyboard
- [ ] **Tablet**: Touch accessibility and responsive design
- [ ] **Mobile**: Touch targets and mobile-specific interactions
- [ ] **High DPI**: Content clarity on high-resolution displays

## Assistive Technology Compatibility

### Screen Readers
- [ ] **VoiceOver** (macOS/iOS): Native Apple screen reader
- [ ] **NVDA** (Windows): Free, open-source screen reader
- [ ] **JAWS** (Windows): Professional screen reader
- [ ] **TalkBack** (Android): Mobile screen reader

### Other Assistive Technologies
- [ ] **Voice Control**: Dragon NaturallySpeaking, Voice Control
- [ ] **Switch Navigation**: Alternative input devices
- [ ] **Screen Magnification**: ZoomText, built-in magnifiers
- [ ] **High Contrast**: System high contrast modes

## Regression Testing Workflow

### Before Each Release
1. **Run Automated Tests**: Execute full test suite
2. **Spot Check Navigation**: Test keyboard navigation on key pages
3. **Verify Contrast**: Confirm no new contrast issues
4. **Test New Features**: Ensure new components meet accessibility standards

### Quarterly Full Audit
1. **Complete Manual Testing**: Full checklist execution
2. **Assistive Technology Testing**: Test with actual screen readers
3. **User Feedback Review**: Address any accessibility feedback received
4. **Documentation Updates**: Update this checklist and accessibility statement

## Issue Tracking and Resolution

### Severity Levels
- **Critical**: Blocks core functionality for users with disabilities
- **High**: Significantly impacts user experience
- **Medium**: Minor accessibility improvements
- **Low**: Enhancement opportunities

### Resolution Timeline
- **Critical**: Fix within 24 hours
- **High**: Fix within 3 business days
- **Medium**: Fix within 1 week
- **Low**: Address in next development cycle

## Resources and Tools

### Testing Tools
- [pa11y](https://github.com/pa11y/pa11y) - Command line accessibility testing
- [axe-core](https://github.com/dequelabs/axe-core) - Accessibility testing engine
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Google's audit tool
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool

### Reference Guides
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Guidelines](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Color and Design Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [Stark](https://www.getstark.co/) - Design accessibility plugin

---

**Document Version**: 1.0  
**Last Updated**: June 15, 2025  
**Next Review**: September 15, 2025
