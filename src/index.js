import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
