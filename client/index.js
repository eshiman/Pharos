// client/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

// Base React libraries
import React from 'react';
// Use to render root component to DOM
import ReactDOM from 'react-dom';

// Connects root component to Redux store
import { Provider } from 'react-redux';
// Use to create Redux store w/ middleware
import { createStore, applyMiddleware } from 'redux';
// Set up react-router
import { Router, browserHistory } from 'react-router';

// Thunk middleware
import reduxThunk from 'redux-thunk';

// App routes
import routes from './routes';
// Combined reducers
import reducers from './reducers';

// App stylesheet
import '../scss/style.scss';

import 'chart.js';

// Create store w/ middleware
const store = createStore(reducers, applyMiddleware(reduxThunk));

const AppComponent = (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
);

//Render root component to DOM
ReactDOM.render(AppComponent, document.querySelector('.root'));
