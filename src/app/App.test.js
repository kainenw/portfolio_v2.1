import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from '../test-utils/mockRouter'
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import App from './App'

describe('App', () => {
  it('renders without crashing and shows header', () => {
    act(() => {
      render(
        <HelmetProvider>
          <RouterContext.Provider value={mockRouter}>
            <App />
          </RouterContext.Provider>
        </HelmetProvider>
      )
    })
    // Use getAllByText for 'about' since it appears multiple times
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0)
  })
})
