import { render, screen } from '@testing-library/react'
import { act } from 'react'
import Blog from './Blog'
import { HelmetProvider } from 'react-helmet-async';

describe('Blog', () => {
  it('renders the Blog page with key sections', () => {
    act(() => {
      render(
        <HelmetProvider>
          <Blog />
        </HelmetProvider>
      )
    })
    // Use getAllByText for 'blog' since it appears multiple times
    expect(screen.getAllByText(/blog/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/highlighted posts/i)).toBeInTheDocument()
    expect(screen.getByText(/Let\'s support Mozilla/i)).toBeInTheDocument()
  })
})
