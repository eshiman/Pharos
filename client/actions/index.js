// client/actions/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import axios from 'axios';

import { UPDATE_LOCATION } from '../action-types';

const ROOT_URL = 'http://localhost:8080';

function randrange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function updateLocation() {
    const url = `${ROOT_URL}/auth/query`;

    return (dispatch) => {
        return axios.get(url)
            .then((res) => {
                dispatch({
                    type: UPDATE_LOCATION,
                    payload: res.data
                });
            });
    };
}
