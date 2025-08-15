import { render, screen, act } from '@testing-library/react'
import Head from 'next/head'
import Header from '../../Components/Header/Header'
import Resources from '../../Pages/Resources/Resources'

describe('Resources Page', () => {
  it('renders the Resources page with key sections', () => {
    act(() => {
      render(
        <>
          <Head />
          <Resources />
        </>
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
      <>
        <Head />
        {/* Mock router context not needed for this test, remove provider */}
        <Header theme="light" changeTheme={jest.fn()} />
      </>
    )
    expect(screen.queryByText(/resources/i)).not.toBeInTheDocument()
  })
})
