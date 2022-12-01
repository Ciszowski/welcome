import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import welcomeRX from './reducers/welcomeRX';
import {configureStore, combineReducers} from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById('root'));
const reducer = combineReducers({ welcomeRX });
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = configureStore({reducer},
  compose(applyMiddleware(thunk), devTools)
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App/>
    </Provider>
  </React.StrictMode>
);
