// client/components/grid.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React, { Component } from 'react';

import { ScatterChart } from 'react-d3';

import { connect } from 'react-redux';

import { updateLocation } from '../actions';

export class Grid extends Component {
    componentWillMount() {
        this.props.updateLocation();
    }

    componentDidMount() {
        setInterval(this.props.updateLocation, 2000);
    }

    update() {
        this.props.updateLocation();
    }

    render() {
        const { gridData } = this.props;

        return (
            <div className="container-fluid grid text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <ScatterChart
                            data={gridData}
                            title="Swimmer location"
                            xAxisLabel="x-distance from main anchor (m)"
                            yAxisLabel="y-distance from main anchor (m)"
                            gridHorizontal={true}
                            gridVertical={true}
                        />
                        <button className="btn btn-success"
                            onClick={this.update.bind(this)}>Update location</button>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        gridData: state.location.gridData
    };
}

export default connect(mapStateToProps, { updateLocation })(Grid);
