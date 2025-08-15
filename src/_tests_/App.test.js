import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react'
import App from '../App/App'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from '../test-utils/mockRouter';
import Head from 'next/head';

it('renders about link', () => {
  let getAllByText;
  act(() => {
    ({ getAllByText } = render(
      <>
        <Head />
        <RouterContext.Provider value={mockRouter}>
          <App />
        </RouterContext.Provider>
      </>
    ));
  });
  // There may be multiple 'about' (nav and heading)
  expect(getAllByText(/about/i).length).toBeGreaterThan(0)
})
