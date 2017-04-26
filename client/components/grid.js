// client/components/grid.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

import React, { Component } from 'react';

import { ScatterChart } from 'react-d3';
import { Bubble } from 'react-chartjs-2';

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

    renderAlert() {
        const { gridData } = this.props;

        if (gridData && Number.isNaN(gridData.x) && Number.isNaN(gridData.y)) {
            return (
                <div className="alert alert-danger">
                   {this.props.errorMessage}
                </div>
            );
        }
    }

    renderDistance() {
        const { gridData } = this.props;

        if (gridData && gridData.x && gridData.y) {
            const userAnchor = [{
                name: 'You',
                values: [{ x: 0, y: 0 }]
            }, {
                name: 'Swimmer',
                values: [{ x: gridData.x, y: gridData.y }]
            }];

            const data = {
                labels: ['Test'],
                datasets: [{
                    fill: false,
                    data: [{ x: 0, y: 0, r: 5 }, {x: gridData.x, y: gridData.y, r: 5}],
                    spanGaps: true
                }]
            };

            const options = {
                title: {
                    display: true,
                    text: 'Swimmer location'
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'x-distance from main anchor (m)'
                        },
                        ticks: {
                            min: -5.0,
                            max: 5.0,
                            maxTicksLimit: 10
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'y-distance from main anchor (m)'
                        },
                        ticks: {
                            min: -5.0,
                            max: 5.0,
                            maxTicksLimit: 10
                        }
                    }]
                }
            };

            return (
                // <div className="gridtest">
                    <Bubble data={data} options={options} height={300}/>
                    // {/* {this.renderAlert()} */}
                // </div>
                // <ScatterChart
                //    data={userAnchor}
                //    title="Swimmer location"
                //    xAxisLabel="x-distance from main anchor (m)"
                //    yAxisLabel="y-distance from main anchor (m)"
                //
                //    gridHorizontal={true}
                //    gridVertical={true}
                // />
            );
        }


    //     if (gridData && parseInt(gridData, 10) < 0.5) {
    //         return (
    //             <div className="alert alert-success">
    //                 <p className="distance">{distance}</p>
    //             </div>
    //         );
    //     } else if (gridData && parseInt(gridData, 10) < 2.0) {
    //         return (
    //             <div className="alert alert-warning">
    //                 <p className="distance">{distance}</p>
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div className="alert alert-danger">
    //                 <p className="distance">{distance}</p>
    //             </div>
    //         );
    //
    //     }
    }

    render() {
        return (
            <div className="container-fluid grid text-center">
                <div className="row">
                    <div className="col-lg-12">
                        {this.renderDistance()}
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
