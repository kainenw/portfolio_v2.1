import { render, screen, act } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from '../../test-utils/mockRouter'
import { HelmetProvider } from 'react-helmet-async'
import Header from '../../Components/Header/Header'
import Resources from './Resources'

describe('Resources Page', () => {
  it('renders the Resources page with key sections', () => {
    act(() => {
      render(
        <HelmetProvider>
          <Resources />
        </HelmetProvider>
      )
    })
    expect(screen.getAllByText(/Resources/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Master the Fundamentals/i)).toBeInTheDocument()
    expect(screen.getByText(/Popular Frameworks & Libraries/i)).toBeInTheDocument()
    expect(screen.getByText(/Design Powerhouses/i)).toBeInTheDocument()
    expect(screen.getByText(/Collaboration and Version Control/i)).toBeInTheDocument()
    expect(screen.getByText(/Free Learning Paths/i)).toBeInTheDocument()
    expect(screen.getByText(/Common Web Development Challenges/i)).toBeInTheDocument()
  })

  it('is not rendered or linked in the navigation', () => {
    render(
      <HelmetProvider>
        <RouterContext.Provider value={mockRouter}>
          <Header theme="light" changeTheme={jest.fn()} />
        </RouterContext.Provider>
      </HelmetProvider>
    )
    expect(screen.queryByText(/resources/i)).not.toBeInTheDocument()
  })
})
