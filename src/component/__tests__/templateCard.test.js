import React from 'react'
import { render, screen } from '@testing-library/react'
import CardTemplate from '../../templates/CardTemplate'

const welcome = {
    "title" : "Ville accueillante"
}

test('My connected Card component', ()=> {
    render(<CardTemplate props={welcome}/>);
    const cardElement = screen.getByTestId('card')
    
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent(welcome["title"]);
})