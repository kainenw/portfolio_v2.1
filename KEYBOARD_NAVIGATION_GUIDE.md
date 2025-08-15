# Keyboard Navigation Guide

## Overview
This guide provides detailed keyboard navigation instructions for the portfolio website, ensuring full accessibility for users who rely on keyboard-only navigation.

## Global Keyboard Shortcuts

### Primary Navigation
| Key | Action |
|-----|--------|
| `Tab` | Move forward through interactive elements |
| `Shift + Tab` | Move backward through interactive elements |
| `Enter` | Activate links and buttons |
| `Space` | Activate buttons and checkboxes |
| `Escape` | Close modals and return to previous state |

### Page Navigation
| Key | Action |
|-----|--------|
| `Tab` (first press) | Access "Skip to main content" link |
| `Home` | Scroll to top of page |
| `End` | Scroll to bottom of page |
| `Page Up` | Scroll up one screen |
| `Page Down` | Scroll down one screen |

## Page-by-Page Navigation

### Homepage (`/`)

#### Navigation Order
1. **Skip Link** → Main content skip link
2. **Header Logo** → Return to homepage
3. **Navigation Menu** → About, Projects, Contact links
4. **Theme Toggle** → Switch between light/dark themes
5. **Header CTA** → Contact button
6. **Hero Section** → Main heading and description
7. **CTA Buttons** → "View My Work" and "Download Resume"
8. **Metrics Section** → Performance statistics
9. **Featured Projects** → Project cards with action buttons
10. **Footer** → Additional links and information

#### Key Interactions
- **Project Cards**: Use `Tab` to navigate to "Case Study" buttons, `Enter` to activate
- **Download Resume**: `Enter` or `Space` to download PDF
- **Theme Toggle**: `Enter` or `Space` to switch themes

### About Page (`/about`)

#### Navigation Order
1. **Skip Link** → Main content access
2. **Header Navigation** → Standard header elements
3. **About Section** → Main content and personal information
4. **Services Grid** → Service offerings and descriptions
5. **Process Steps** → How I work methodology
6. **Skills Section** → Technical capabilities
7. **Footer** → Contact and additional links

#### Key Interactions
- **Service Cards**: Focus highlights entire card area
- **Process Steps**: Sequential navigation through workflow
- **Skill Tags**: Informational, no activation required

### Projects Page (`/projects`)

#### Navigation Order
1. **Skip Link** → Main content access
2. **Header Navigation** → Standard header elements
3. **Tab Switcher** → Design/Development project categories
4. **Project Grid** → Individual project cards
5. **Project Actions** → Case study and live demo buttons
6. **Footer** → Additional navigation

#### Key Interactions
- **Tab Switcher**: 
  - `Tab` to focus switcher
  - `Left/Right Arrow` or `Enter` to change categories
- **Project Cards**: 
  - `Tab` through card elements
  - `Enter` on buttons to view case studies or live demos
- **External Links**: Open in new tabs (announced by screen readers)

### Contact Page (`/contact`)

#### Navigation Order
1. **Skip Link** → Main content access
2. **Header Navigation** → Standard header elements
3. **Contact Form** → Form fields and submission
4. **Contact Information** → Alternative contact methods
5. **Footer** → Standard footer navigation

#### Key Interactions
- **Form Fields**:
  - `Tab` to move between fields
  - Type to enter information
  - `Enter` to submit form (when on submit button)
- **Required Fields**: Marked with asterisk and announced by screen readers
- **Error Messages**: Focus moves to first error field if validation fails

### Case Study Pages (`/projects/case-study/[project]`)

#### Navigation Order
1. **Skip Link** → Main content access
2. **Header Navigation** → Standard header elements
3. **Back Button** → Return to projects page
4. **Case Study Content** → Detailed project information
5. **Project Images** → Visual examples and screenshots
6. **Technology Tags** → Technical implementation details
7. **Footer** → Standard footer navigation

#### Key Interactions
- **Back Button**: `Enter` to return to projects page
- **Image Gallery**: `Tab` through images, descriptions available to screen readers
- **External Links**: Prototype links and live demos open in new tabs

## Modal and Overlay Navigation

### Contact Modal (when available)
1. **Focus Trap**: Focus remains within modal
2. **Close Button**: `Escape` or `Enter` on close button
3. **Form Navigation**: Standard form keyboard navigation
4. **Return Focus**: Focus returns to trigger element when closed

### Image Overlays (if present)
1. **Image Focus**: Large image receives focus
2. **Navigation**: Arrow keys to navigate between images
3. **Close**: `Escape` to close overlay
4. **Return Focus**: Focus returns to triggering image

## Focus Management

### Focus Indicators
- **Visible Outline**: Blue outline around focused elements
- **High Contrast**: 3:1 contrast ratio minimum for focus indicators
- **Consistent Style**: Same focus indicator style across all elements

### Focus Behavior
- **Logical Order**: Tab order follows visual reading order
- **Skip Links**: Available for efficient navigation
- **Focus Trapping**: Modal dialogs trap focus appropriately
- **Focus Return**: Focus returns to logical position after interactions

## Accessibility Features

### Screen Reader Support
- **Headings**: Proper heading hierarchy (H1 → H2 → H3)
- **Landmarks**: Page regions identified (header, nav, main, footer)
- **Alt Text**: Descriptive text for all informative images
- **ARIA Labels**: Enhanced descriptions for complex interactions

### Visual Indicators
- **Current Page**: Active navigation items clearly marked
- **Button States**: Hover and focus states visually distinct
- **Form Validation**: Error states clearly marked and announced
- **Loading States**: Progress indicators for form submissions

## Browser-Specific Notes

### Chrome/Edge
- Standard keyboard navigation behavior
- Focus indicators follow system preferences
- Form autofill may affect tab order

### Firefox
- Slight differences in focus indicator styling
- Tab navigation includes all focusable elements by default
- Form validation messages may vary

### Safari
- Tab navigation may require "Full Keyboard Access" enabled in System Preferences
- Focus indicators may appear differently
- VoiceOver integration for enhanced accessibility

## Mobile Keyboard Navigation

### External Keyboards
- Same keyboard shortcuts apply
- Touch and keyboard navigation can be mixed
- Focus indicators adapt to touch screen interaction

### On-Screen Keyboards
- Form navigation optimized for mobile keyboards
- Input types optimized (email, tel, url)
- Submit buttons accessible via keyboard "Go" button

## Troubleshooting

### Common Issues
- **Focus Not Visible**: Check browser zoom level and focus indicator contrast
- **Tab Order Unclear**: Use browser developer tools to trace tab sequence
- **Buttons Not Activating**: Ensure `Enter` and `Space` both work for buttons
- **Modal Focus Trapped**: Use `Escape` key or focus on close button

### Browser Settings
- **Chrome**: Enable "Navigate pages with a keyboard" in Accessibility settings
- **Firefox**: Enable "Always use the cursor keys to navigate within pages"
- **Safari**: Enable "Press Tab to highlight each item on a webpage"

## Additional Resources

### Screen Reader Testing
- **VoiceOver** (macOS): `Cmd + F5` to enable
- **NVDA** (Windows): Free download from nvaccess.org
- **Browser Extensions**: axe DevTools, WAVE, or Lighthouse

### Keyboard Navigation Tools
- **Tab Order Visualization**: Browser developer tools
- **Focus Management**: JavaScript debugging for complex interactions
- **Accessibility Tree**: View how screen readers interpret the page

---

**Last Updated**: June 15, 2025  
**Compatibility**: All modern browsers and assistive technologies  
**Contact**: For navigation issues, contact accessibility@kainenwhite.com
