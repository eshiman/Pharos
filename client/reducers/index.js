// client/reducers/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

// Aggregate all reducers to one root reducer
const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;
