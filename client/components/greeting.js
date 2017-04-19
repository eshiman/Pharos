// greeting.js
// Author: Jeremy Savarin
// Biosensors LabView Control Panel

import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

export default class Greeting extends Component {
    renderGreeting() {
        return (
            <h1 className="text-center">Welcome to Pharos!</h1>
        );
    }

    render() {
        return (
            <div className="greeting">
                {this.renderGreeting()}
                <Jumbotron>
                    <h2 className="text-center">Hello this is where the monitor will be!</h2>
                </Jumbotron>
            </div>
        );
    }
}
