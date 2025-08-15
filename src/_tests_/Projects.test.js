import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import '@testing-library/jest-dom'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from '../test-utils/mockRouter'
import { HelmetProvider } from 'react-helmet-async';
import Projects from '../app/Projects/Projects'

// Mock the Deck component
jest.mock('../../Components/Deck/Deck', () => { // Adjusted mock path
  return function MockDeck({ items }) {
    return (
      <div data-testid="deck">
        {items.map((item, index) => (
          <div key={index} data-testid={`project-${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
            {item.title}
          </div>
        ))}
      </div>
    )
  }
})

describe('Projects', () => {
  const renderProjects = () => {
    render(
      <HelmetProvider>
        <RouterContext.Provider value={mockRouter}>
          <Projects />
        </RouterContext.Provider>
      </HelmetProvider>
    );
  };

  it('renders the Projects page with key elements', () => {
    act(() => {
      renderProjects();
    })
    
    // Check main heading and description
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText(/Explore my work in design and development/i)).toBeInTheDocument()
    
    // Check tab buttons
    expect(screen.getByRole('button', { name: /design/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /development/i })).toBeInTheDocument()
  })

  it('starts with design tab active by default', () => {
    act(() => {
      renderProjects();
    });
    
    const designButton = screen.getByRole('button', { name: /design/i })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    
    expect(designButton).toHaveClass('active')
    expect(developmentButton).not.toHaveClass('active')
    expect(designButton).toHaveAttribute('aria-pressed', 'true')
    expect(developmentButton).toHaveAttribute('aria-pressed', 'false')
  })

  it('displays design projects when design tab is active', () => {
    act(() => {
      renderProjects();
    });
    
    // Should show design section and projects
    expect(screen.getByText('Design Projects')).toBeInTheDocument()
    expect(screen.getByText(/User-centered design solutions/i)).toBeInTheDocument()
    expect(screen.getByTestId('project-voting-app')).toBeInTheDocument()
    expect(screen.getByTestId('project-portfolio-v2')).toBeInTheDocument()
    expect(screen.getByTestId('project-sushi-app')).toBeInTheDocument()
    
    // Should not show development section
    expect(screen.queryByText('Development Projects')).not.toBeInTheDocument()
  })

  it('switches to development tab when clicked', () => {
    act(() => {
      renderProjects();
    })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    // Click development tab
    act(() => {
      fireEvent.click(developmentButton)
    })
    // Check tab states
    expect(developmentButton).toHaveClass('active')
    expect(screen.getByRole('button', { name: /design/i })).not.toHaveClass('active')
    expect(developmentButton).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /design/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('displays development projects when development tab is active', () => {
    act(() => {
      renderProjects();
    })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    act(() => {
      fireEvent.click(developmentButton)
    })
    // Should show development section and projects
    expect(screen.getByText('Development Projects')).toBeInTheDocument()
    expect(screen.getByText(/Full-stack development work/i)).toBeInTheDocument()
    expect(screen.getByTestId('project-portfolio-v2-(development)')).toBeInTheDocument()
    expect(screen.getByTestId('project-reddit-app')).toBeInTheDocument()
    expect(screen.getByTestId('project-tonnetz-visualizer')).toBeInTheDocument()
    expect(screen.getByTestId('project-savings-calculator')).toBeInTheDocument()
    // Should not show design section
    expect(screen.queryByText('Design Projects')).not.toBeInTheDocument()
  })

  it('switches back to design tab when clicked', () => {
    act(() => {
      renderProjects();
    })
    const designButton = screen.getByRole('button', { name: /design/i })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    // Click development tab first
    act(() => {
      fireEvent.click(developmentButton)
    })
    expect(developmentButton).toHaveClass('active')
    // Click design tab again
    act(() => {
      fireEvent.click(designButton)
    })
    expect(designButton).toHaveClass('active')
    expect(developmentButton).not.toHaveClass('active')
    // Should show design projects again
    expect(screen.getByText('Design Projects')).toBeInTheDocument()
    expect(screen.queryByText('Development Projects')).not.toBeInTheDocument()
  })

  it('has proper ARIA attributes for accessibility', () => {
    act(() => {
      renderProjects();
    })
    
    const designButton = screen.getByRole('button', { name: /design/i })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    
    expect(designButton).toHaveAttribute('aria-pressed')
    expect(developmentButton).toHaveAttribute('aria-pressed')
  })
})
