import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Kainen White | Product & UX Designer",
  description:
    "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
  openGraph: {
    title: "Kainen White | Product & UX Designer",
    description:
      "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
    type: "website",
    url: "https://kainenwhite.com",
    images: [
      {
        url: "https://kainenwhite.com/headshot.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Kainen White Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kainen White | Product & UX Designer",
    description:
      "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
    images: ["https://kainenwhite.com/headshot.webp"],
  },
  authors: [{ name: "Kainen White" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kainenwhite.com",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
