// client/components/app.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React, { Component } from 'react';

import Footer from './footer';
import Greeting from './greeting';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Greeting/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
