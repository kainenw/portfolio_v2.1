/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors (Design Spec Section 8.3a)
        light: {
          background: '#DDDDDD',     // Page Background
          card: '#FFFFFF',           // Card/Section Backgrounds  
          text: '#343A40',           // Text Color (Charcoal)
          primary: '#005A9C',        // Primary Accent (Strong Blue)
          secondary: '#778899',      // Secondary Accent (Light Slate Gray)
          cta: '#007BFF',           // Call to Action (Bright, Active Blue)
        },
        // Dark Mode Colors (Design Spec Section 8.3b)
        dark: {
          background: '#101010',     // Page Background (Very Dark Gray)
          card: '#171717',          // Card/Section Backgrounds (Slightly Lighter Gray)
          text: '#F7FAFC',          // Text Color (Off-White)
          primary: '#2B6CB0',       // Primary Accent (Medium Blue)
          secondary: '#4A5568',     // Secondary Accent (Dark Slate Gray)
          cta: '#4299E1',          // Call to Action (Bright, Accessible Blue)
        },
        // Legacy color names for backward compatibility
        lightGray: '#DDDDDD',
        charcoal: '#343A40',
        strongBlue: '#005A9C',
        lightSlateGray: '#778899',
        brightActiveBlue: '#007BFF',
        veryDarkGray: '#101010',
        slightlyLighterGray: '#171717',
        offWhite: '#F7FAFC',
        mediumBlue: '#2B6CB0',
        darkSlateGray: '#4A5568',
        brightAccessibleBlue: '#4299E1',
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // 8px base unit spacing scale (Design Spec Section 8.5)
        '1': '8px',    // 8px
        '2': '16px',   // 16px  
        '3': '24px',   // 24px
        '4': '32px',   // 32px
        '5': '40px',   // 40px
        '6': '48px',   // 48px
        '8': '64px',   // 64px
        '10': '80px',  // 80px
        '12': '96px',  // 96px
        '16': '128px', // 128px
        '20': '160px', // 160px
        '24': '192px', // 192px
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}