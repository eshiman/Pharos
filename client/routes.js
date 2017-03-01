// client/routes.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greeting';

const DEV_ROUTE = '/';
const ELECTRON_ROUTE = '/home/jeremy/Documents/Projects/Pharos/dist/index.html';

export default (
    <Route path={ELECTRON_ROUTE} component={App}>
        <IndexRoute component={Greeting}/>
    </Route>
);
