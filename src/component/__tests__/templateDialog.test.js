import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import React from 'react'
import { render, screen, cleanup, configure } from '@testing-library/react'
import DialogTemplate from '../../templates/dialog';
import welcomeRX from '../../reducers/welcomeRX';

const welcome = {
    "title" : "Bonjour Laval !",
    "logo" : "http://localhost:3000/static/images/logo-laval.svg",          
    "mp3": "/static/sons/welcome-laval.mp3"
}

const reducer = combineReducers({ welcomeRX });

test('My connected Dialog component', ()=> {
    const store =  createStore(reducer, applyMiddleware(thunk));
      
    render(<Provider store={store}> <DialogTemplate props={welcome}/> </Provider>);
    const dialogElement = screen.getByTestId('dialog')
    
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).toHaveTextContent('Soumettez votre participation a la ville de Laval');
})