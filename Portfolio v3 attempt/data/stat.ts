// Stat data for homepage
export interface Stat {
  id: number
  value: string
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    id: 1,
    value: '100+',
    label: 'Projects',
    description: 'Completed for clients worldwide',
  },
  {
    id: 2,
    value: '50+',
    label: 'Clients',
    description: 'Trusted by industry leaders',
  },
  {
    id: 3,
    value: '10',
    label: 'Years',
    description: 'Experience in design & development',
  },
  {
    id: 4,
    value: '5',
    label: 'Awards',
    description: 'Recognized for excellence',
  },
]