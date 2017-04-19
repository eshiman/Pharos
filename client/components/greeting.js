// client/components/greeting.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

import Grid from './grid';

export default class Greeting extends Component {
    renderGreeting() {
        return (
            <h1 className="text-center">Welcome to Pharos!</h1>
        );
    }

    render() {
        return (
            <div className="container-fluid greeting">
                <div className="row">
                    <div className="col-lg-6">
                        {this.renderGreeting()}
                    </div>
                </div>
            </div>
        );
    }
}
