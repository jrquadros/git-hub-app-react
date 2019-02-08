'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports - validate({

    devtool:'source-map',

    entry:[
        'react-loader/path',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module:{
        preloaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],

        loaders:{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }
    }
})