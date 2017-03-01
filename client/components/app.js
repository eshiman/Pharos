// client/components/app.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}
