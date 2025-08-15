"use client";

import '../globals.css';
import React, { useState } from "react";
import { Mail, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CTAButton from '../../Components/CTAButton/CTAButton';

function Contact() {
  const [formStatus, setFormStatus] = useState(''); // '', 'success', 'error', 'submitting'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long';
    return newErrors;
  };

  const EMAILJS_SERVICE_ID = 'service_aq31ryq';
  const EMAILJS_TEMPLATE_ID = 'template_i6hf19e';
  const EMAILJS_PUBLIC_KEY = 'TVAPL6E8ACT_xqRDP';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS is not properly configured. Missing credentials.');
      setFormStatus('error');
      return;
    }
    
    setFormStatus('submitting');
    setErrors({});
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Kainen', // Adding recipient name for EmailJS template
        },
        EMAILJS_PUBLIC_KEY
      );
      console.log('EmailJS Success:', result);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Google Analytics conversion tracking for successful submission
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'G-EV8432PHGL', // Replace with your GA4 Measurement ID or Google Ads conversion ID
          event_category: 'Contact',
          event_label: 'Contact Form Submitted',
          value: 1
        });
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setFormStatus('error');
      // Google Analytics event for failed submission
      if (window.gtag) {
        window.gtag('event', 'conversion_failed', {
          event_category: 'Contact',
          event_label: 'Contact Form Failed',
          value: 0
        });
      }
    }
  };

  return (
    <div className="Contact Page">
      <div className="non-contrast-section hero">
        <Mail size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Let&apos;s Connect!</h1>
        <p>I&apos;m always open to discussing new projects and opportunities.</p>
      </div>
      <div className="contrast-section" style={{ maxWidth: 400, margin: "2rem auto" }}>
        {formStatus === 'success' && (
          <div className="form-notification success" role="alert" aria-live="polite">
            <CheckCircle size={20} aria-hidden="true" />
            <span>Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!</span>
          </div>
        )}
        {formStatus === 'error' && (
          <div className="form-notification error" role="alert" aria-live="assertive">
            <AlertCircle size={20} aria-hidden="true" />
            <span>Sorry, there was an error sending your message. Please try again, or email me directly at <a href="mailto:hello@example.com" style={{color:'#005A9C',textDecoration:'underline'}}>hello@example.com</a>.</span>
          </div>
        )}
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
          aria-label="Contact form"
          noValidate
        >
          <div>
            <label htmlFor="contact-name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
              style={{ borderColor: errors.name ? '#dc3545' : undefined }}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="error-message" role="alert" aria-live="polite">{errors.name}</span>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              style={{ borderColor: errors.email ? '#dc3545' : undefined }}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-message" role="alert" aria-live="polite">{errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-input"
              style={{ borderColor: errors.message ? '#dc3545' : undefined, resize: 'vertical', minHeight: '120px' }}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="error-message" role="alert" aria-live="polite">{errors.message}</span>
            )}
          </div>
          <CTAButton
            type="submit"
            variant="primary"
            size="medium"
            className=""
            disabled={formStatus === 'submitting'}
            style={{ opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer', position: 'relative' }}
            aria-label={formStatus === 'submitting' ? 'Sending message, please wait' : 'Send message to Kainen White'}
            aria-describedby={formStatus === 'submitting' ? 'submit-status' : undefined}
          >
            {formStatus === 'submitting' ? (
              <>
                <span className="spinner" style={{
                  display: 'inline-block',
                  width: 18,
                  height: 18,
                  border: '2px solid #fff',
                  borderTop: '2px solid #005A9C',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginRight: 8,
                  verticalAlign: 'middle',
                }} aria-hidden="true" />
                <span id="submit-status">Sending...</span>
              </>
            ) : 'Send Message'}
          </CTAButton>
        </form>
      </div>
      <div className="non-contrast-section">
        <p>Thank you for visiting my portfolio! I&apos;m excited to continue learning and growing in the field.</p>
      </div>
      <section className="contact-info-section contrast-section" style={{ maxWidth: 400, margin: '2rem auto 3rem auto', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
        <h2 id="contact-info-heading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contact Information</h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>You can also reach me through these channels.</p>
        <div role="list" aria-labelledby="contact-info-heading" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left', padding: '1.5rem' }}>
          <div role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 0  }}>
            <Mail size={22} style={{ verticalAlign: 'middle', minWidth: 22}} aria-hidden="true" />
            <span>Email</span>
            <a href="mailto:hello@example.com" style={{ marginLeft: 'auto', color: '#f9fdff', fontWeight: 500 }} aria-label="Send email to hello@example.com">hello@example.com</a>
          </div>
          <div role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 0  }}>
            <Phone size={22} style={{ verticalAlign: 'middle', minWidth: 22 }} aria-hidden="true" />
            <span>Phone</span>
            <a href="tel:+1234567890" style={{ marginLeft: 'auto', color: '#fff', fontWeight: 500 }} aria-label="Call +1 (234) 567-890">+1 (234) 567-890</a>
          </div>
          <div role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin size={22} style={{ verticalAlign: 'middle', minWidth: 22 }} aria-hidden="true" />
            <span>Location</span>
            <span style={{ marginLeft: 'auto', color: '#fff', fontWeight: 500, textAlign: 'right' }} aria-label="Located in Nashville, Tennessee, USA, remote friendly"> Nashville, TN, USA <span style={{ fontStyle: 'italic', color: '#888' }}>(Remote Friendly)</span></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;