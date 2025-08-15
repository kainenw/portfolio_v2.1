import { render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from '../test-utils/mockRouter'
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Homepage from '../app/Home/Homepage'

describe('Homepage', () => {
  it('renders hero section with headline and actions', () => {
    render(
      <HelmetProvider>
        <RouterContext.Provider value={mockRouter}>
          <Homepage />
        </RouterContext.Provider>
      </HelmetProvider>
    )
    expect(screen.getByRole('heading', { level: 1, name: /user-centric/i })).toBeInTheDocument()
    expect(screen.getByText(/passionate designer/i)).toBeInTheDocument()
    const viewProjects = screen.getByRole('link', { name: /view projects/i })
    const myProcess = screen.getByRole('link', { name: /my process/i })
    const getInTouchLinks = screen.getAllByRole('link', { name: /get in touch/i })
    expect(viewProjects).toBeInTheDocument()
    expect(myProcess).toBeInTheDocument()
    expect(getInTouchLinks.length).toBeGreaterThan(0)
    expect(viewProjects).toHaveAttribute('href', '/projects')
    expect(myProcess).toHaveAttribute('href', '/about#my-process')
    expect(getInTouchLinks.some(link => link.getAttribute('href') === '/contact')).toBe(true)
  })

  it('renders featured projects section and at least one project card', () => {
    render(
      <HelmetProvider>
        <RouterContext.Provider value={mockRouter}>
          <Homepage />
        </RouterContext.Provider>
      </HelmetProvider>
    )
    expect(screen.getByRole('heading', { level: 2, name: /featured projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view all projects/i })).toHaveAttribute('href', '/projects')
    expect(screen.getByTestId('project-voting-app')).toBeInTheDocument()
    expect(screen.getByTestId('project-portfolio-v2')).toBeInTheDocument()
    expect(screen.getByTestId('project-sushi-app')).toBeInTheDocument()
  })

  it('renders homepage CTA section with correct text and button', () => {
    render(
      <HelmetProvider>
        <RouterContext.Provider value={mockRouter}>
          <Homepage />
        </RouterContext.Provider>
      </HelmetProvider>
    )
    expect(screen.getByRole('heading', { level: 2, name: /ready to build/i })).toBeInTheDocument()
    expect(screen.getByText(/i'd love to hear from you/i)).toBeInTheDocument()
    const ctaButtons = screen.getAllByRole('link', { name: /get in touch/i })
    expect(ctaButtons[ctaButtons.length - 1]).toHaveAttribute('href', '/contact')
  })
})
