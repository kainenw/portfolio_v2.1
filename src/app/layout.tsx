import "./globals.css";
import "./_old-styles_/_Pages.css";
import "./_old-styles_/Homepage.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ClientProvider from "../Components/ClientProvider";

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
      <body className={`${inter.variable} antialiased`}>
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
