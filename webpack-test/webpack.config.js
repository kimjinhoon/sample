const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        page1: './src/index2.js',
       page2: './src/index3.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    mode: 'production'
};