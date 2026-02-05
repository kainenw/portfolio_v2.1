# Portfolio Website

This is a Next.js portfolio website designed to showcase the work and skills of a designer. The website serves as a strategic digital asset aimed at converting recruiters and potential clients into actual clients.

## Project Structure

The project is organized as follows:

```
portfolio-website
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx          # About page component
│   │   ├── contact
│   │   │   └── page.tsx          # Contact page component
│   │   ├── projects
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx      # Dynamic project case study page
│   │   │   └── page.tsx          # Projects listing page
│   │   ├── globals.css            # Global CSS styles
│   │   ├── layout.tsx             # Main layout structure
│   │   ├── not-found.tsx          # Custom 404 page
│   │   └── page.tsx               # Homepage component
│   ├── components
│   │   ├── ui
│   │   │   ├── Button.tsx         # Reusable button component
│   │   │   ├── Card.tsx           # Reusable card component
│   │   │   └── Input.tsx          # Reusable input component
│   │   ├── CaseStudyBlocks.tsx     # Component for case study content blocks
│   │   ├── ContactForm.tsx        # Contact form component
│   │   ├── Footer.tsx             # Footer component
│   │   ├── HeroSection.tsx        # Hero section component
│   │   ├── Navigation.tsx         # Navigation component
│   │   ├── ProjectCard.tsx        # Project card component
│   │   ├── TestimonialBlock.tsx   # Testimonial block component
│   │   └── ThemeProvider.tsx      # Theme provider component
│   ├── data
│   │   ├── projects.ts            # Project data
│   │   └── testimonials.ts         # Testimonials data
│   ├── hooks
│   │   └── useTheme.ts            # Custom hook for theme management
│   └── types
│       └── index.ts               # TypeScript types and interfaces
├── public
│   ├── projects                   # Directory for project images and assets
│   └── favicon.ico               # Favicon for the website
├── design                         # Directory for design assets
├── .env.local                     # Environment variables for local development
├── .gitignore                     # Git ignore file
├── next.config.js                 # Next.js configuration
├── package.json                   # npm configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Features

- **Responsive Design**: The website is fully responsive and optimized for various devices.
- **Dynamic Routing**: Individual project case studies are accessible via dynamic routes.
- **Custom 404 Page**: A user-friendly 404 page guides users back to relevant content.
- **Theme Management**: Supports light and dark modes for better user experience.
- **SEO Optimized**: The website is structured to maximize organic search visibility.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the website.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.