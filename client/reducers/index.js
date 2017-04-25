// client/reducers/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import { UPDATE_LOCATION } from '../action-types';

// Aggregate all reducers to one root reducer
const rootReducer = combineReducers({
    form: formReducer,
    location: updateLocationReducer
});

export function updateLocationReducer(state = {}, action) {
    switch (action.type) {
    case UPDATE_LOCATION:
        return { ...state, gridData: action.payload.serialData };
    default:
        return state;
    }
}

export default rootReducer;
