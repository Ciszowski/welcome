import React from 'react'
import RouterApp from '../RouterApp'
import { createMemoryHistory } from "history";
import { renderWithProviders } from '../utils/test-utils';


describe('ButtonLogin', () => {
    test('should pass', () => {
        const history = createMemoryHistory({ initialEntries: ['/home'] });
        const { asFragment } = renderWithProviders(
            <RouterApp history={history} />
        )
        expect(history.location.pathname).toBe('/home');
        expect(asFragment()).toMatchSnapshot()
    });
  });