import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import CardTemplate from '../../templates/card'

const welcome = {
    "title" : "Ville accueillante",
    "description" : "Laval se veut accueillante, ouverte, respectueuse de tous et soucieuse de l'inclusion des citoyens dans le développement de la ville, comme le démontrent les valeurs porteuses de la vision Laval 2035. Les différentes actions qu’elle déploie visent à coordonner harmonieusement l’action des partenaires pour favoriser l’inclusion sociale et culturelle de tous les Lavallois.",
    "logo":"/static/images/acceuil-laval.jpg"
}


test('My connected Card component', ()=> {
    render(<CardTemplate props={welcome}/>);
    const cardElement = screen.getByTestId('card')
    
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Ville accueillante');

})