// webpack.config.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/client',
    //Entry point
    entry: './index.js',
    //Output files
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    //Use sourcemaps
    devtool: 'source-map',
    watch: true,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.scss?$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000
    }
};
