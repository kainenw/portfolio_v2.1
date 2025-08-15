import React from 'react';
import Card from '../Card/Card';
import './Deck.css';


function Deck({ items, actionType }) {
  // actionType: string (comma-separated) or array
  // e.g. 'caseStudy,demo' or ['caseStudy', 'demo']
  const getActionLabel = (type) => {
    if (type === 'demo') return 'View Demo';
    if (type === 'github') return 'View Code';
    if (type === 'caseStudy') return 'Case Study';
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getNewTab = (type) => {
    if (type === 'caseStudy') return false;
    return true;
  };

  // Normalize actionType to array
  let actionTypes = [];
  if (Array.isArray(actionType)) {
    actionTypes = actionType;
  } else if (typeof actionType === 'string') {
    actionTypes = actionType.split(',').map(s => s.trim()).filter(Boolean);
  }

  return (
    <div className="deck-grid">
      {items.map((item, idx) => {
        let actions = [];
        if (item.links) {
          actionTypes.forEach(type => {
            if (item.links[type]) {
              actions.push({
                label: getActionLabel(type),
                href: item.links[type],
                newTab: getNewTab(type)
              });
            }
          });
        }
        // Generate a test id based on the project title (kebab-case, remove special chars)
        const baseId = item.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        // For development tab, add suffix if needed
        let dataTestId = `project-${baseId}`;
        if (item.title.toLowerCase().includes('portfolio v2') && actionType === 'github') {
          dataTestId = 'project-portfolio-v2-(development)';
        }
        if (item.title.toLowerCase().includes('portfolio v2') && actionType !== 'github') {
          dataTestId = 'project-portfolio-v2';
        }
        return (
          <Card
            key={idx}
            {...item}
            actions={actions}
            dataTestId={dataTestId}
          />
        );
      })}
    </div>
  );
}

export default Deck;
