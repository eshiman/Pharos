// client/actions/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import { UPDATE_LOCATION } from '../action-types';

const ROOT_URL = 'http://localhost:8080';

function randrange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function updateLocation() {
    return {
        type: UPDATE_LOCATION,
        payload: [{
            name: 'Anchor 1',
            values: [{ x: 0, y: 0 }]
        }, {
            name: 'Anchor 2',
            values: [{ x: randrange(-50, 50), y: randrange(-50, 50) }]
        }, {
            name: 'Anchor 3',
            values: [{ x: randrange(-50, 50), y: randrange(-50, 50) }]
        }]
    };
}
