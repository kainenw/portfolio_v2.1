import "./globals.css";
import "./_old-styles_/_Pages.css";
import "./_old-styles_/Homepage.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Initialize fonts so `.variable` is available on the returned objects
const geist = Geist({ subsets: ["latin"], variable: "--geist-font" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--geist-mono" });
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ClientProvider from "../Components/ClientProvider";

// Client-safe helper that returns the system theme when run in a browser.
// This function is safe to import/use anywhere because it guards access to window.
export function getSystemTheme(): 'dark' | 'light' {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

export const metadata: Metadata = {
  title: "Kainen White | Product & UX Designer",
  description:
    "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const defaultTheme: 'dark' | 'light' = 'light';

  return (
    <html lang="en" data-theme={defaultTheme} suppressHydrationWarning>
      <head>
        {/* Removed inline setThemeScript; next-themes now fully controls theme */}
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ClientProvider>
          <div>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <a href="#footer" className="skip-link">
              Skip to footer
            </a>
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}