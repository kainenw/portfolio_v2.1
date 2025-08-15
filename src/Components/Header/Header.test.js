import { render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from '../../test-utils/mockRouter'
import Header from './Header'

describe('Header', () => {
  it('renders all navigation links and logo', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Header theme="light" changeTheme={jest.fn()} />
      </RouterContext.Provider>
    )
    // Logo/brand should be present
    expect(screen.getByText(/kw/i)).toBeInTheDocument()
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    // Check that we have the navigation links
    expect(screen.getAllByText(/contact/i)).toHaveLength(1) // Only one CTA button
  })

  it('renders the theme toggle button', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Header theme="dark" changeTheme={jest.fn()} />
      </RouterContext.Provider>
    )
    expect(screen.getByRole('button', { name: /change theme/i })).toBeInTheDocument()
  })

  it('calls changeTheme with the next theme', () => {
    const changeTheme = jest.fn()
    render(
      <RouterContext.Provider value={mockRouter}>
        <Header theme="dark" changeTheme={changeTheme} />
      </RouterContext.Provider>
    )
    screen.getByRole('button', { name: /change theme/i }).click()
    expect(changeTheme).toHaveBeenCalledWith('light')
  })
})
