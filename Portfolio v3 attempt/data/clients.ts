export interface Client {
  id: string
  name: string
  logo: string
  logoAlt: string
  website: string
  industry: string
  projectType: string
  featured: boolean
  testimonialId?: string
}

export const clients: Client[] = [
  {
    id: 'techcorp',
    name: 'TechCorp Inc.',
    logo: '/images/clients/techcorp-logo.svg',
    logoAlt: 'TechCorp Inc. logo',
    website: 'https://techcorp.example.com',
    industry: 'Technology',
    projectType: 'E-commerce Platform',
    featured: true,
    testimonialId: 'sarah-johnson'
  },
  {
    id: 'fintech-solutions',
    name: 'FinTech Solutions',
    logo: '/images/clients/fintech-logo.svg',
    logoAlt: 'FinTech Solutions logo',
    website: 'https://fintech.example.com',
    industry: 'Financial Technology',
    projectType: 'Mobile Application',
    featured: true,
    testimonialId: 'michael-chen'
  },
  {
    id: 'healthcare-analytics',
    name: 'Healthcare Analytics',
    logo: '/images/clients/healthcare-logo.svg',
    logoAlt: 'Healthcare Analytics logo',
    website: 'https://healthcare.example.com',
    industry: 'Healthcare',
    projectType: 'Dashboard Design',
    featured: true,
    testimonialId: 'dr-emily-rodriguez'
  },
  {
    id: 'growth-dynamics',
    name: 'Growth Dynamics',
    logo: '/images/clients/growth-logo.svg',
    logoAlt: 'Growth Dynamics logo',
    website: 'https://growthdynamics.example.com',
    industry: 'Marketing',
    projectType: 'Website Redesign',
    featured: true,
    testimonialId: 'james-wilson'
  },
  {
    id: 'innovatelab',
    name: 'InnovateLab',
    logo: '/images/clients/innovate-logo.svg',
    logoAlt: 'InnovateLab logo',
    website: 'https://innovatelab.example.com',
    industry: 'Startup',
    projectType: 'MVP Development',
    featured: true,
    testimonialId: 'lisa-parker'
  },
  {
    id: 'digital-ventures',
    name: 'Digital Ventures',
    logo: '/images/clients/digital-logo.svg',
    logoAlt: 'Digital Ventures logo',
    website: 'https://digitalventures.example.com',
    industry: 'Consulting',
    projectType: 'Brand Identity',
    featured: false
  },
  {
    id: 'smart-retail',
    name: 'Smart Retail Co.',
    logo: '/images/clients/retail-logo.svg',
    logoAlt: 'Smart Retail Co. logo',
    website: 'https://smartretail.example.com',
    industry: 'Retail',
    projectType: 'E-commerce Solution',
    featured: false
  },
  {
    id: 'edutech-platform',
    name: 'EduTech Platform',
    logo: '/images/clients/edutech-logo.svg',
    logoAlt: 'EduTech Platform logo',
    website: 'https://edutech.example.com',
    industry: 'Education',
    projectType: 'Learning Management System',
    featured: false
  }
]

// Helper function to get featured clients
export const getFeaturedClients = (): Client[] => {
  return clients.filter(client => client.featured)
}

// Helper function to get clients by industry
export const getClientsByIndustry = (industry: string): Client[] => {
  return clients.filter(client => client.industry.toLowerCase() === industry.toLowerCase())
}

// Helper function to get client by testimonial ID
export const getClientByTestimonialId = (testimonialId: string): Client | undefined => {
  return clients.find(client => client.testimonialId === testimonialId)
}

// Helper function to get random clients
export const getRandomClients = (count: number): Client[] => {
  const shuffled = [...clients].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}