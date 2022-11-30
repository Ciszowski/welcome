import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import React from 'react'
import { render, screen } from '@testing-library/react'
import DialogTemplate from '../../templates/DialogTemplate';
import welcomeRX from '../../reducers/welcomeRX';

const reducer = combineReducers({ welcomeRX });
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null


const welcome = {
    "title" : "Bonjour Laval !"
}

test('My connected Dialog component', ()=> {
    const store = configureStore({reducer}, compose(applyMiddleware(thunk), devTools));

    render(<Provider store={store}> <DialogTemplate props={welcome}/> </Provider>);
    const dialogElement = screen.getByTestId('dialog')
    
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).toHaveTextContent(welcome["title"]);
})