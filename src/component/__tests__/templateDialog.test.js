import React from 'react'
import { screen } from '@testing-library/react'
import DialogTemplate from '../templates/DialogTemplate';
import { renderWithProviders } from '../utils/test-utils';


const welcome = {
    "title" : "Bonjour Laval !"
}

test('My connected Dialog component', ()=> {
    renderWithProviders(<DialogTemplate props={welcome}/>)
    const dialogElement = screen.getByTestId('dialog')
    
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).toHaveTextContent(welcome["title"]);
})