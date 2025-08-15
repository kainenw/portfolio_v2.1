"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import './Card.css';
import CTAButton from '../CTAButton/CTAButton';
// Fallback images by slug
import voteImg from '../../img/projects/vote.webp';
import portfolioImg from '../../img/projects/portfolio.webp';
import sushiImg from '../../img/projects/sushi.webp';
import redditImg from '../../img/projects/reddit.webp';
import tonnetzImg from '../../img/projects/TonnetzTorus.gif';
import scalcImg from '../../img/projects/scalc.webp';

const imageBySlug = {
  'voting-app': voteImg,
  'portfolio-v2': portfolioImg,
  'sushi-app': sushiImg,
  'portfolio-v2-development': portfolioImg,
  'reddit-app': redditImg,
  'tonnetz-visualizer': tonnetzImg,
  'savings-calculator': scalcImg,
};

function Card({ image = '', images = [], title = '', description = '', actions = [], dataTestId, slug }) {
  const router = useRouter();

  // Normalize image value (supports string URLs and Next.js StaticImageData objects)
  const normalizeSrc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object' && val.src) return val.src;
    return '';
  };

  const firstFromArray = Array.isArray(images) && images.length > 0 ? images[0] : '';
  const fromProps = normalizeSrc(image) || normalizeSrc(firstFromArray);
  const fromSlug = slug && imageBySlug[slug] ? normalizeSrc(imageBySlug[slug]) : '';
  const displayImage = fromProps || fromSlug || '/window.svg'; // placeholder in /public

  return (
    <article className="project-card" data-testid={dataTestId}>
      <div className="card-image">
        <img src={displayImage} alt={title ? `${title} project screenshot` : 'Project screenshot'} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions" role="group" aria-label={`Actions for ${title}`}>
          {Array.isArray(actions) && actions.map((action, idx) => {
            if (!action || typeof action.href !== 'string' || typeof action.label !== 'string') return null;
            const isInternal = action.href.startsWith('/') && !action.newTab;
            if (isInternal) {
              return (
                <CTAButton
                  key={idx}
                  variant="primary"
                  size="medium"
                  onClick={() => router.push(action.href)}
                  aria-label={`${action.label} for ${title}`}
                >
                  {action.label}
                </CTAButton>
              );
            }
            return (
              <CTAButton
                key={idx}
                href={action.href}
                variant="secondary"
                size="medium"
                target={action.newTab ? '_blank' : undefined}
                rel={action.newTab ? 'noopener noreferrer' : undefined}
                aria-label={`${action.label} for ${title}${action.newTab ? ' (opens in new tab)' : ''}`}
              >
                {action.label}
              </CTAButton>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Card;