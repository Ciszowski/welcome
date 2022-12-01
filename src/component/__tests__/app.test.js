import React from 'react';
import App from '../../App';
import { renderWithProviders } from '../utils/test-utils';

describe('component App',()=> {

    it('should render component sidenav in a container',async () => {
        const { getByTestId } = renderWithProviders(<App /> )
        expect(getByTestId('app')).toBeInTheDocument();
    });
})