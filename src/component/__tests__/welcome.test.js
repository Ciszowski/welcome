import React from 'react'
import { renderWithProviders } from '../utils/test-utils';
import Welcome  from '../welcome/Welcome'

const initialState = [{ status: 'DONE', presentation : {}, modals : {}, isOpen : false }]

test('My connected Welcome component', ()=> {
    renderWithProviders(<Welcome/>, { 
        preloadedState : {
            welcomeRX: initialState
        }})
})
