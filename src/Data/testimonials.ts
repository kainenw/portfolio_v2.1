export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  image: string
  quote: string
  rating: number
  project?: string
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'TechCorp Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: "Working with Kainen was an absolute pleasure. His attention to detail and ability to translate our vision into a beautiful, functional website exceeded our expectations. The new design increased our conversion rate by 35%.",
    rating: 5,
    project: 'e-commerce-platform',
    featured: true
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    title: 'CEO',
    company: 'FinTech Solutions',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: "Kainen delivered a mobile app that not only looked stunning but also performed flawlessly. His understanding of user experience and technical implementation is exceptional. We saw 50,000 new users in the first month.",
    rating: 5,
    project: 'fintech-mobile-app',
    featured: true
  },
  {
    id: 'dr-emily-rodriguez',
    name: 'Dr. Emily Rodriguez',
    title: 'Chief Medical Officer',
    company: 'Healthcare Analytics',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: "The dashboard Kainen created revolutionized how our medical staff accesses patient data. The intuitive interface reduced administrative time by 60% and improved our overall efficiency dramatically.",
    rating: 5,
    project: 'healthcare-dashboard',
    featured: true
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    title: 'Marketing Director',
    company: 'Growth Dynamics',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
    quote: "Kainen's strategic approach to UX design helped us understand our users better. The redesign not only looked modern but also improved our key metrics across the board.",
    rating: 5,
    featured: false
  },
  {
    id: 'lisa-parker',
    name: 'Lisa Parker',
    title: 'Startup Founder',
    company: 'InnovateLab',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    quote: "As a startup, we needed someone who could wear multiple hats. Kainen delivered both exceptional design and solid development work, helping us launch our MVP on time and under budget.",
    rating: 5,
    featured: false
  }
]

// Helper function to get featured testimonials
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured)
}

// Helper function to get testimonials by project
export const getTestimonialsByProject = (projectSlug: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.project === projectSlug)
}

// Helper function to get random testimonials
export const getRandomTestimonials = (count: number): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}