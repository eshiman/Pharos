// greeting.js
// Author: Jeremy Savarin
// Biosensors LabView Control Panel

import React, { Component } from 'react';

import { connect } from 'react-redux';

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
            </div>
        );
    }
}
