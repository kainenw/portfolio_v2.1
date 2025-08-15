export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  deliverables: string[]
  timeline: string
  startingPrice: string
  icon: string
  featured: boolean
}

export const services: Service[] = [
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'Strategic design solutions that prioritize user needs while achieving business goals through research-driven, conversion-optimized interfaces.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Visual Design System',
      'Responsive Design',
      'Accessibility Compliance',
      'Conversion Optimization'
    ],
    deliverables: [
      'User research findings and personas',
      'Information architecture and user flows',
      'Interactive prototypes',
      'Complete design system',
      'Developer handoff documentation',
      'Usability testing report'
    ],
    timeline: '4-8 weeks',
    startingPrice: '$8,000',
    icon: 'Palette',
    featured: true
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Modern, performant web applications built with cutting-edge technologies, focusing on user experience and business results.',
    features: [
      'React/Next.js Development',
      'TypeScript Implementation',
      'Responsive Development',
      'Performance Optimization',
      'SEO Implementation',
      'Testing & Quality Assurance'
    ],
    deliverables: [
      'Production-ready application',
      'Clean, documented codebase',
      'Performance optimization report',
      'SEO implementation',
      'Testing suite',
      'Deployment configuration'
    ],
    timeline: '6-12 weeks',
    startingPrice: '$12,000',
    icon: 'Code',
    featured: true
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description: 'End-to-end web application development from database design to user interface, delivering complete digital solutions.',
    features: [
      'Frontend & Backend Development',
      'Database Design & Implementation',
      'API Development',
      'Authentication & Security',
      'Cloud Deployment',
      'Maintenance & Support'
    ],
    deliverables: [
      'Complete web application',
      'Database schema and setup',
      'API documentation',
      'Security implementation',
      'Cloud infrastructure setup',
      'Ongoing support plan'
    ],
    timeline: '8-16 weeks',
    startingPrice: '$20,000',
    icon: 'Layers',
    featured: true
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Transform existing websites into modern, high-converting digital experiences that drive business growth.',
    features: [
      'Current Site Audit',
      'Conversion Rate Optimization',
      'Modern Design Implementation',
      'Performance Improvements',
      'SEO Enhancement',
      'Analytics Setup'
    ],
    deliverables: [
      'Site audit and recommendations',
      'New design mockups',
      'Redesigned website',
      'Performance optimization',
      'SEO improvements',
      'Analytics dashboard'
    ],
    timeline: '4-10 weeks',
    startingPrice: '$6,000',
    icon: 'RefreshCw',
    featured: false
  },
  {
    id: 'consultation',
    title: 'Design Consultation',
    description: 'Strategic guidance for design decisions, technical architecture, and user experience optimization.',
    features: [
      'Design Strategy Planning',
      'Technical Architecture Review',
      'UX Audit & Recommendations',
      'Team Training & Workshops',
      'Best Practices Implementation',
      'Ongoing Support'
    ],
    deliverables: [
      'Strategic recommendations report',
      'Technical documentation',
      'UX audit findings',
      'Training materials',
      'Implementation roadmap',
      'Follow-up sessions'
    ],
    timeline: '2-4 weeks',
    startingPrice: '$2,500',
    icon: 'MessageCircle',
    featured: false
  }
]

// Helper function to get featured services
export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured)
}

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}