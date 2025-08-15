// FILE: app/page.tsx
// PURPOSE: The content for the homepage ONLY. All global logic is removed.

import type { Metadata } from "next";
import Deck from "../Components/Deck/Deck";
import MetricsDisplay from "../Components/MetricsDisplay/MetricsDisplay";
import CTAButton from "../Components/CTAButton/CTAButton";
import { getFeaturedProjects } from "../Data/projects";
import { Sparkle, FolderOpen, Handshake, Quote } from "lucide-react";
import { testimonials } from "../Data/testimonials";
import { portfolioMetrics } from "../Data/portfolioMetrics";
import Image from "next/image";

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
  const featuredProjects = getFeaturedProjects();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kainen White",
    jobTitle: "Product & UX Designer",
    description:
      "Product and UX designer creating user-centered digital experiences that drive business growth",
    url: "https://kainenwhite.com",
    image: "https://kainenwhite.com/headshot.webp",
    sameAs: [
      "https://www.linkedin.com/in/kainenwhite",
      "https://github.com/kainenwhite",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kainen White Portfolio",
    url: "https://kainenwhite.com",
    author: {
      "@type": "Person",
      name: "Kainen White",
    },
  };

  return (
    <div className="Homepage Page home-page-container">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero Section */}
      <section className="hero non-contrast-section" id="hero">
        <Sparkle
          size={40}
          style={{ display: "block", margin: "0 auto 12px" }}
          aria-hidden="true"
        />
        <h1>
          Crafting <span className="highlight">User-Centric</span> Digital Experiences
        </h1>
        <p>
          I&apos;m a passionate designer transforming complex problems into intuitive and engaging solutions. Explore my work to see how I blend
          creativity with strategy to deliver impactful results.
        </p>
        <div className="hero-actions" role="group" aria-label="Main navigation actions">
          <CTAButton
            href="/Projects"
            variant="primary"
            size="medium"
            aria-label="View my design projects and case studies"
          >
            View Projects
          </CTAButton>
          <CTAButton
            href="/About#my-process"
            variant="secondary"
            size="medium"
            aria-label="Learn about my design process"
          >
            My Process
          </CTAButton>
          <CTAButton
            href="/Contact"
            variant="primary"
            size="medium"
            aria-label="Contact me for opportunities"
          >
            Get in Touch
          </CTAButton>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects contrast-section" id="my-process">
        <FolderOpen
          size={32}
          style={{ display: "block", margin: "0 auto 8px" }}
          aria-hidden="true"
        />
        <h2 className="left-right-padding">Featured Projects</h2>
        <Deck items={featuredProjects} actionType="caseStudy, demo" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CTAButton
            href="/Projects"
            variant="secondary"
            size="medium"
            aria-label="View all design projects"
          >
            View All Projects
          </CTAButton>
        </div>
      </section>

      {/* Portfolio Metrics Section */}
      <section
        className="portfolio-metrics non-contrast-section"
        style={{ margin: "4rem 0", textAlign: "center" }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Results That Matter</h2>
        <p
          style={{
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            color: "#fff",
          }}
        >
          Numbers that showcase the impact of user-centered design and strategic thinking.
        </p>
        <MetricsDisplay metrics={portfolioMetrics} layout="horizontal" variant="highlight" />
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials contrast-section"
        id="testimonials"
        style={{ margin: "3rem 0" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Quote size={32} style={{ verticalAlign: "middle", marginRight: 8 }} aria-hidden="true" />
          What Clients Say
        </h2>
        <div
          className="testimonials-container"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}
          role="list"
        >
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card" role="listitem">
              <Image
                src={t.image || "/window.svg"}
                alt={`${t.name}, ${t.title} at ${t.company}`}
                className="testimonial-photo"
                width={50}
                height={50}
                loading="lazy"
              />
              <blockquote className="quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="name">{t.name}</div>
              <div className="title-company">
                {t.title}, {t.company}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta non-contrast-section">
        <Handshake size={32} style={{ display: "block", margin: "0 auto 8px" }} aria-hidden="true" />
        <h2>Ready to build something great together?</h2>
        <p>
          Whether you have a project in mind, need a design consultation, or just want to connect, I&apos;d love to hear from you.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CTAButton
            href="/Contact"
            variant="primary"
            size="large"
            style={{ marginTop: "1rem" }}
            aria-label="Contact Kainen White to start working together"
          >
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </div>
  );
}