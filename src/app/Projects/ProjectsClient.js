"use client";

import React, { useState } from 'react';
import '../globals.css';
import Deck from '../../Components/Deck/Deck.js';
import { FolderOpen } from 'lucide-react';
import { designProjects, developmentProjects } from '../../Data/projects.ts';

function Projects() {
  const [activeTab, setActiveTab] = useState('design');

  const handleTabSwitch = tab => setActiveTab(tab);

  // Keyboard navigation for tabs
  const handleKeyDown = (event, tab) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTabSwitch(tab);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const newTab = tab === 'design' ? 'development' : 'design';
      handleTabSwitch(newTab);
      // Focus the new tab
      setTimeout(() => {
        const newTabButton = document.getElementById(`${newTab}-tab`);
        if (newTabButton) newTabButton.focus();
      }, 0);
    }
  };

  return (
    <div className="Projects Page">
      <div className="non-contrast-section hero">
        <FolderOpen size={40} style={{ display: 'block', margin: '0 auto 12px' }} aria-hidden="true" />
        <h1>Projects</h1>
        <p>Explore my work in design and development through interactive case studies.</p>
        {/* Tab Toggle Switch */}
        <div className="projects-tab-container" role="tablist" aria-label="Project categories">
          <div className={`projects-tab-switch${activeTab === 'development' ? ' development-active' : ''}`}> 
            <button 
              className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('design')}
              onKeyDown={(e) => handleKeyDown(e, 'design')}
              role="tab"
              aria-selected={activeTab === 'design'}
              aria-controls="design-projects"
              id="design-tab"
              tabIndex={activeTab === 'design' ? 0 : -1}
            >
              Design
            </button>
            <button 
              className={`tab-button ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('development')}
              onKeyDown={(e) => handleKeyDown(e, 'development')}
              role="tab"
              aria-selected={activeTab === 'development'}
              aria-controls="development-projects"
              id="development-tab"
              tabIndex={activeTab === 'development' ? 0 : -1}
            >
              Development
            </button>
            <div className="tab-animated-slider" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      {/* Design Projects Section */}
      {activeTab === 'design' && (
        <div className="Design contrast-section" role="tabpanel" id="design-projects" aria-labelledby="design-tab">
          <h2 className="left-right-padding">Design Projects</h2>
          <p className='left-right-padding'>User-centered design solutions focusing on research, iteration, and impact.</p>
          {/* Deck of Cards */}
          <Deck
            items={designProjects}
            actionType="caseStudy, demo"
          />
          {/* Carousel removed */}
        </div>
      )}
      {/* Development Projects Section */}
      {activeTab === 'development' && (
        <div className="Development contrast-section" role="tabpanel" id="development-projects" aria-labelledby="development-tab">
          <h2 className="left-right-padding">Development Projects</h2>
          <p className='left-right-padding'>Full-stack development work showcasing technical skills and problem-solving.</p>
          {/* Deck of Cards */}
          <Deck
            items={developmentProjects}
            actionType="github"
          />
          {/* Carousel removed */}
        </div>
      )}
    </div>
  );
}

export default Projects;
