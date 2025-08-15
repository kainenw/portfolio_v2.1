import { render } from '@testing-library/react'
import { act } from 'react'
import App from './App/App'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import mockRouter from './test-utils/mockRouter'
import Head from 'next/head';

describe('index.js', () => {
  it('renders App without crashing', () => {
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
  })
})
