// client/routes.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greeting';

export default (
    <Route path="/home/jeremy/Documents/Projects/Pharos/dist/index.html" component={App}>
        <IndexRoute component={Greeting}/>
    </Route>
);
