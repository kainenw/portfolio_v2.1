import { render, screen } from '@testing-library/react'
import { act } from 'react'
import Blog from './Blog'
import Head from 'next/head';

describe('Blog', () => {
  it('renders the Blog page with key sections', () => {
    act(() => {
      render(
        <>
          <Head />
          <Blog />
        </>
      )
    })
    // Use getAllByText for 'blog' since it appears multiple times
    expect(screen.getAllByText(/blog/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/highlighted posts/i)).toBeInTheDocument()
    expect(screen.getByText(/Let\'s support Mozilla/i)).toBeInTheDocument()
  })
})
