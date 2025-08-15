import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react'
import App from '../App/App'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from '../test-utils/mockRouter';
import { HelmetProvider } from 'react-helmet-async';

it('renders about link', () => {
  let getAllByText;
  act(() => {
    ({ getAllByText } = render(
      <HelmetProvider>
        <RouterContext.Provider value={mockRouter}>
          <App />
        </RouterContext.Provider>
      </HelmetProvider>
    ));
  });
  // There may be multiple 'about' (nav and heading)
  expect(getAllByText(/about/i).length).toBeGreaterThan(0)
})
