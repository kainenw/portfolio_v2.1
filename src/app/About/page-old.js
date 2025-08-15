import AboutClient from './AboutClient';

export const metadata = {
  title: "About Kainen White",
  description: "Learn more about Kainen White, a product and UX designer creating user-centered digital experiences."
};

export default function AboutPage() {
  return <AboutClient />;
}
  const [modalOpen, setModalOpen] = useState(false);
  const focusTrapRef = useFocusTrap(modalOpen);
  const previouslyFocusedElement = useRef(null);

  // Store the previously focused element when modal opens
  useEffect(() => {
    if (modalOpen) {
      previouslyFocusedElement.current = document.activeElement;
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus and body scroll when modal closes
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleModalClose();
    }
  };

  // Contact form copied from Contact.js
  const contactForm = (
    <form
      action="mailto:kainen.white@gmail.com"
      method="POST"
      encType="text/plain"
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      <label htmlFor="modal-name" className="sr-only">Your Name</label>
      <input
        id="modal-name"
        name="name"
        placeholder="Your Name"
        required
        aria-required="true"
      />
      <label htmlFor="modal-message" className="sr-only">Your Message</label>
      <textarea
        id="modal-message"
        name="message"
        placeholder="Your Message"
        required
        aria-required="true"
      />
      <button type="submit" aria-describedby="modal-submit-help">Send</button>
      <span id="modal-submit-help" className="sr-only">This will open your default email client</span>
    </form>
  );

  return (
    <>
      <div className="About Page">
      <section className="non-contrast-section hero" style={{ position: 'relative' }}>
        <h1>Design With Purpose. Built for Results.</h1>
        <h2>User-centered thinking meets measurable impact.</h2>
        
        <div className="info-group">
          <Image src={headshot} alt="Professional headshot of Kainen White, Product & UX Designer" loading="lazy" />
          <div>
            {/* <h3>About Me</h3> */}
            <p>
              I&apos;m Kainen. I design intuitive, conversion-focused experiences that solve real user problems and drive business outcomes. With a process grounded in strategy, research, and iterative testing, every project is crafted to deliver value—both to users and stakeholders.
            </p>
          </div>
        </div>
        <div className="hero-actions" role="group" aria-label="Main actions">
          <CTAButton 
            variant="primary" 
            size="medium" 
            onClick={() => setModalOpen(true)}
            aria-label="Start a new project with Kainen White"
          >
            Start a Project
          </CTAButton>
          
          {/* Download Resume Button in Hero Section */}
          <CTAButton
            variant="secondary"
            size="medium"
            href="/KainenWhite_Resume.pdf"
            download
            showDownloadIcon
            className="download-resume-btn"
            style={{ display: 'inline-flex', alignItems: 'center' }}
            aria-label="Download Kainen White's resume PDF"
          >
            Download Resume
          </CTAButton>
        </div>
      </section>

      {/* Services Section */}
      <section className="contrast-section" id="services">
        <h2>Services I Offer</h2>
        <div className="services-grid" role="list">
          <article className="service-card" role="listitem">
            <div className="service-icon">
              <Image
                className="icon"
                src={designthinking}
                alt="Design thinking icon"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <h3>UX/UI Design</h3>
            <p>User research, wireframing, prototyping, and visual design that creates intuitive and engaging experiences.</p>
            <ul>
              <li>User research & personas</li>
              <li>Wireframes & prototypes</li>
              <li>Visual design & branding</li>
              <li>Usability testing</li>
            </ul>
          </article>
          
          <article className="service-card" role="listitem">
            <div className="service-icon">
              <Image
                className="icon"
                src={dev}
                alt="Development icon"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <h3>Frontend Development</h3>
            <p>Responsive, accessible websites and applications built with modern technologies and best practices.</p>
            <ul>
              <li>React & JavaScript development</li>
              <li>Responsive design implementation</li>
              <li>Performance optimization</li>
              <li>Accessibility compliance</li>
            </ul>
          </article>
          
          <article className="service-card" role="listitem">
            <div className="service-icon">
              <Image
                className="icon"
                src={design}
                alt="Design icon"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <h3>Design Consultation</h3>
            <p>Strategic guidance to improve your digital presence and user experience through expert analysis and recommendations.</p>
            <ul>
              <li>UX audits & analysis</li>
              <li>Design system creation</li>
              <li>Conversion optimization</li>
              <li>Strategy & planning</li>
            </ul>
          </article>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="non-contrast-section" id="how-i-work">
        <h2>How I Work</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          My process is collaborative, iterative, and always focused on solving real user problems while achieving business goals.
        </p>
        
        <div className="process-steps" role="list">
          <article className="process-step" role="listitem">
            <div className="step-number" aria-hidden="true">1</div>
            <h3>Discovery & Research</h3>
            <p>I start by understanding your users, business goals, and constraints through research, interviews, and competitive analysis.</p>
          </article>
          
          <article className="process-step" role="listitem">
            <div className="step-number" aria-hidden="true">2</div>
            <h3>Strategy & Planning</h3>
            <p>Based on research insights, I develop a clear strategy and project plan that aligns user needs with business objectives.</p>
          </article>
          
          <article className="process-step" role="listitem">
            <div className="step-number" aria-hidden="true">3</div>
            <h3>Design & Prototype</h3>
            <p>I create wireframes, prototypes, and high-fidelity designs, iterating based on feedback and testing throughout.</p>
          </article>
          
          <article className="process-step" role="listitem">
            <div className="step-number" aria-hidden="true">4</div>
            <h3>Build & Test</h3>
            <p>I develop responsive, accessible solutions and conduct usability testing to ensure the best possible user experience.</p>
          </article>
          
          <article className="process-step" role="listitem">
            <div className="step-number" aria-hidden="true">5</div>
            <h3>Launch & Optimize</h3>
            <p>After launch, I monitor performance, gather user feedback, and make data-driven improvements to maximize results.</p>
          </article>
        </div>
      </section>
      <div>
        
        {/* Download Resume CTA Section */}
        <div className="contrast-section" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h2>Ready to Work Together?</h2>
          <p style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Download my resume to see my full experience and qualifications, or start a conversation about your next project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton
              variant="primary"
              size="medium"
              href="/KainenWhite_Resume.pdf"
              download
              showDownloadIcon
              className="download-resume-btn"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              Download Resume
            </CTAButton>
            <button
              className="cta-btn outline"
              onClick={() => setModalOpen(true)}
              aria-label="Open contact form to start a project"
              style={{
                background: 'transparent',
                color: 'var(--accent-color, #005A9C)',
                border: '2px solid var(--accent-color, #005A9C)',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent-color, #005A9C)';
                e.target.style.color = '#fff';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--accent-color, #005A9C)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    {/* Modal Contact Window */}
    {modalOpen && (
      <div
        className="modal-overlay"
        role="button"
        tabIndex={0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.35)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => {
          // Only close if clicking the overlay itself, not its children
          if (e.target === e.currentTarget) {
            handleModalClose();
          }
        }}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
            e.preventDefault();
            handleModalClose();
          }
        }}
        aria-label="Close modal overlay"
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div
          ref={focusTrapRef}
          className="contrast-section modal-contact"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onKeyDown={handleModalKeyDown}
          style={{
            minWidth: 320,
            maxWidth: 400,
            width: '90vw',
            padding: '2rem',
            borderRadius: 12,
            boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
            position: 'relative',
            transform: 'translateY(-1px)',
          }}
        >
          <button
            aria-label="Close dialog"
            onClick={handleModalClose}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'none',
              border: 'none',
              fontSize: 24,
              color: 'var(--contrast-fg)',
              cursor: 'pointer',
              fontWeight: 700,
              lineHeight: 1,
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
          <h2 id="modal-title" style={{ marginTop: 0 }}>Start a Project</h2>
          <p id="modal-description" className="sr-only">
            Contact form to reach out about starting a new project with Kainen White
          </p>
          {contactForm}
        </div>
      </div>
    )}
    </div>
    </>
  )
}
export default About
