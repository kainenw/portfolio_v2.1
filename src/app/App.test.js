import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from '../test-utils/mockRouter'
import Head from 'next/head';
import App from './App'

describe('App', () => {
  it('renders without crashing and shows header', () => {
    act(() => {
      render(
        <>
          <Head />
          <RouterContext.Provider value={mockRouter}>
            <App />
          </RouterContext.Provider>
        </>
      )
    })
    // Use getAllByText for 'about' since it appears multiple times
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0)
  })
})
