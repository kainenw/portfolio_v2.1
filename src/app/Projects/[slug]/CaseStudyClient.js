"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import MetricsDisplay from '../../../Components/MetricsDisplay/MetricsDisplay';
import { getProjectBySlug } from '../../../Data/projects';
import DOMPurify from 'dompurify';
import './CaseStudy.css';

// Helper function to render list items with proper accessibility
const renderListItems = (items, type) => {
  if (!items || items.length === 0) return <p>No {type} information available.</p>;
  
  // Handle both array and string inputs
  if (typeof items === 'string') {
    return <p>{items}</p>;
  }
  
  return (
    <ul aria-label={`${type} details`}>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

// Helper function to render testimonial with accessibility enhancements
const renderTestimonial = (testimonial) => {
  if (!testimonial) return null;
  return (
    <section className="testimonials-section" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading">Client Testimonial</h2>
      <blockquote 
        className="testimonial-item" 
        role="blockquote"
        aria-label={`Testimonial from ${testimonial.name || testimonial.author}`}
      >
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
        <footer className="testimonial-client">
          {testimonial.photo && (
            <img 
              src={testimonial.photo} 
              alt={`${testimonial.name || testimonial.author}, ${testimonial.title} at ${testimonial.company}`}
              className="testimonial-photo" 
              loading="lazy" 
            />
          )}
          <div className="testimonial-info">
            <cite className="testimonial-name">{testimonial.name || testimonial.author}</cite>
            <div className="testimonial-company">
              {testimonial.title} at {testimonial.company}
            </div>
          </div>
        </footer>
      </blockquote>
    </section>
  );
};

// Helper function to render team with proper accessibility
const renderTeam = (team) => {
  if (!team) return null;
  
  if (typeof team === 'string') {
    return <span>{team}</span>;
  }
  
  if (Array.isArray(team)) {
    // If it's an array of objects with name and role
    return (
      <div className="team-list" aria-label="Team members">
        {team.map((member, index) => (
          <span key={index} className="team-member">
            <strong>{member.name || member}</strong>
            {member.role && ` - ${member.role}`}
          </span>
        ))}
      </div>
    );
  }
  
  return null;
};

export default function CaseStudyClient({ slug }) {
  const router = useRouter();
  const slugFromUrl = slug.split('-case-study')[0];
  const project = getProjectBySlug(slugFromUrl);
  const title = project?.title || '';

  // Focus management for accessibility
  useEffect(() => {
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
      mainHeading.focus();
    }
    if (project && project.title) {
      document.title = `${project.title} - Case Study | Kainen White`;
    }
  }, [project]);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Case study not found.</div>;
  }

  const {
    description, 
    longDescription,
    problem, 
    role,
    team,
    process, 
    solution, 
    impact,
    businessResults,
    businessImpact,
    testimonial,
    testimonials,
    technologies, 
    images,
    image,
    learnings,
    prototypeEmbed,
    links,
    galleryImages 
  } = project;
  
  // Convert impact array to MetricsDisplay format
  const convertImpactToMetrics = (impacts) => {
    if (!impacts || !Array.isArray(impacts)) return null;
    
    return impacts.map((impactItem) => ({
      value: impactItem.value,
      label: impactItem.metric,
      description: impactItem.description,
      type: impactItem.value.includes('%') ? 'percentage' : 'text',
      icon: 'increase'
    }));
  };

  // Convert businessImpact strings to MetricsDisplay format (legacy support)
  const parseBusinessImpactToMetrics = (impacts) => {
    if (!impacts || !Array.isArray(impacts)) return null;
    
    return impacts.map((impact) => {
      // Extract numbers and determine type
      const percentMatch = impact.match(/(\d+\.?\d*)%/);
      const ratingMatch = impact.match(/(\d+\.?\d*)\s*\/\s*(\d+)/);
      const timeMatch = impact.match(/(\d+):(\d+)/);
      const numberMatch = impact.match(/(\d+\.?\d*)/);
      
      let value, type, icon = 'increase';
      
      if (percentMatch) {
        value = parseFloat(percentMatch[1]);
        type = 'percentage';
        icon = impact.toLowerCase().includes('increase') || impact.toLowerCase().includes('improve') ? 'increase' : 'target';
      } else if (ratingMatch) {
        value = parseFloat(ratingMatch[1]);
        type = 'rating';
        icon = 'award';
      } else if (timeMatch) {
        value = `${timeMatch[1]}:${timeMatch[2]}`;
        type = 'time';
        icon = 'target';
      } else if (numberMatch) {
        value = parseFloat(numberMatch[1]);
        type = 'number';
        icon = 'users';
      }
      
      return {
        value,
        type,
        label: impact,
        icon
      };
    });
  };

  const impactMetrics = convertImpactToMetrics(impact);
  const businessMetrics = parseBusinessImpactToMetrics(businessImpact);

  return (
    <article className="case-study" role="main" aria-labelledby="case-study-title">
      <nav aria-label="Case study navigation">
        <button
          onClick={() => router.push('/Projects')}
          className="back-to-projects-btn"
          aria-label="Return to all projects"
        >
          <ArrowLeft size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} aria-hidden="true" />
          Back to All Projects
        </button>
      </nav>

      {/* Project Overview Section */}
      <header className="case-study-section project-overview">
        <h1 id="case-study-title" tabIndex={-1}>{title}</h1>
        {(images && images[0]) || image ? (
          <figure className="case-study-image">
            <img 
              src={(images && images[0]) || image} 
              alt={`Main showcase for ${title} project`} 
              loading="lazy"
            />
          </figure>
        ) : null}
        <p className="case-study-description">{description}</p>
        {longDescription && <p className="case-study-long-description">{longDescription}</p>}
      </header>
      
      {/* Problem Section */}
      <section className="case-study-section" aria-labelledby="problem-heading">
        <h2 id="problem-heading">The Challenge</h2>
        {renderListItems(problem, 'problem')}
      </section>
      
      {/* Role & Team Section */}
      {(role || team) && (
        <section className="case-study-section" aria-labelledby="role-team-heading">
          <h2 id="role-team-heading">Role & Team</h2>
          {role && <p><strong>My Role:</strong> {role}</p>}
          {team && (
            <div>
              <strong>Team:</strong>
              {renderTeam(team)}
            </div>
          )}
        </section>
      )}
      
      {/* Process Section */}
      <section className="case-study-section" aria-labelledby="process-heading">
        <h2 id="process-heading">Design Process</h2>
        {process && process.length > 0 ? (
          <ol className="process-list" aria-label="Design process steps">
            {process.map((step, index) => (
              <li key={index} className="process-step">{step}</li>
            ))}
          </ol>
        ) : (
          <p>Process information coming soon.</p>
        )}
      </section>

      {/* Interactive Prototype Section */}
      {prototypeEmbed && (
        <section className="case-study-section" id="interactive-prototype" aria-labelledby="prototype-heading">
          <h2 id="prototype-heading">Interactive Prototype</h2>
          <div className="case-study-prototype-embed" style={{margin: '1.5rem 0'}}>
            {typeof prototypeEmbed === 'string' ? (
              <div
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(prototypeEmbed) }}
                role="region"
                aria-label="Interactive prototype embed"
              />
            ) : prototypeEmbed}
          </div>
        </section>
      )}
      
      {/* Solution Section */}
      <section className="case-study-section" aria-labelledby="solution-heading">
        <h2 id="solution-heading">The Solution</h2>
        {renderListItems(solution, 'solution')}
      </section>

      {/* Impact & Results Section */}
      {(impact || businessImpact || businessResults) && (
        <section className="case-study-section" aria-labelledby="impact-heading">
          <h2 id="impact-heading">Impact & Results</h2>
          {impactMetrics && (
            <div role="region" aria-label="Project impact metrics">
              <MetricsDisplay metrics={impactMetrics} layout="row" />
            </div>
          )}
          {businessMetrics && (
            <div role="region" aria-label="Business impact metrics">
              <MetricsDisplay metrics={businessMetrics} layout="row" />
            </div>
          )}
          {businessResults && (
            <div className="business-results" role="region" aria-label="Detailed business results">
              {businessResults.roi && <p><strong>ROI:</strong> {businessResults.roi}</p>}
              {businessResults.conversionIncrease && <p><strong>Conversion Increase:</strong> {businessResults.conversionIncrease}</p>}
              {businessResults.conversion && <p><strong>Conversion:</strong> {businessResults.conversion}</p>}
              {businessResults.efficiencyGain && <p><strong>Efficiency Gain:</strong> {businessResults.efficiencyGain}</p>}
              {businessResults.efficiency && <p><strong>Efficiency:</strong> {businessResults.efficiency}</p>}
              {businessResults.userSatisfaction && <p><strong>User Satisfaction:</strong> {businessResults.userSatisfaction}</p>}
              {businessResults.revenue && <p><strong>Revenue Impact:</strong> {businessResults.revenue}</p>}
              {businessResults.users && <p><strong>User Impact:</strong> {businessResults.users}</p>}
            </div>
          )}
        </section>
      )}
      
      {/* Technologies Section */}
      {technologies && technologies.length > 0 && (
        <section className="case-study-section" aria-labelledby="technologies-heading">
          <h2 id="technologies-heading">Technologies & Tools</h2>
          <ul className="technologies-list" aria-label="Technologies and tools used">
            {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
          </ul>
        </section>
      )}
      
      {/* Testimonial Section */}
      {renderTestimonial(testimonial)}

      {/* Legacy testimonials support */}
      {testimonials && testimonials.length > 0 && (
        <section className="testimonials-section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading">Testimonials</h2>
          <div aria-label="Client testimonials">
            {testimonials.map((testimonialItem, index) => (
              <blockquote key={index} className="testimonial-item" role="listitem">
                <p>&ldquo;{testimonialItem.quote}&rdquo;</p>
                <footer>
                  {testimonialItem.photo && (
                    <img 
                      src={testimonialItem.photo} 
                      alt={`${testimonialItem.name || testimonialItem.author}, ${testimonialItem.title}`} 
                      className="testimonial-photo" 
                      loading="lazy" 
                    />
                  )}
                  <cite>
                    <strong>{testimonialItem.name || testimonialItem.author}</strong>, {testimonialItem.title} at {testimonialItem.company}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Learnings & Reflections Section - NEW! */}
      {learnings && learnings.length > 0 && (
        <section className="case-study-section" aria-labelledby="learnings-heading">
          <h2 id="learnings-heading">Key Learnings & Reflections</h2>
          <ul className="learnings-list" aria-label="Key learnings from the project">
            {learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Project Links */}
      {links && (links.demo || links.github || links.repository) && (
        <section 
          className="case-study-section cta-section" 
          id="project-links" 
          style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--bg-color-non-contrast)', borderRadius: '8px' }}
          aria-labelledby="explore-heading"
        >
          <h2 id="explore-heading">Explore Further</h2>
          <nav aria-label="Project links" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            {links.demo && (
              <a 
                href={links.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-btn primary"
                aria-label={`View live demo of ${title} (opens in new tab)`}
              >
                View Live Demo
              </a>
            )}
            {(links.github || links.repository) && (
              <a 
                href={links.github || links.repository} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-btn secondary"
                aria-label={`View ${title} source code on GitHub (opens in new tab)`}
              >
                View on GitHub
              </a>
            )}
          </nav>
        </section>
      )}

      {/* Image Gallery */}
      {(images && images.length > 1) || galleryImages ? (
        <section className="case-study-gallery" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading">Project Gallery</h2>
          <div className="gallery-grid" aria-label="Project screenshots gallery">
            {images && images.length > 1 && images.slice(1).map((imageUrl, index) => (
              <img 
                key={index} 
                src={imageUrl} 
                alt={`${title} screenshot ${index + 1}`} 
                loading="lazy" 
              />
            ))}
            {galleryImages && galleryImages.map((imageUrl, index) => (
              <img 
                key={index} 
                src={imageUrl} 
                alt={`${title} screenshot ${index + 1}`} 
                loading="lazy"
              />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
