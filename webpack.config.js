/**
 * @description [webpack配置]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-21
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        app:  ['webpack-hot-middleware/client?reload=true', './app/app.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "/"
    },

    resolve: {
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude: /(node_modules|bower_components)/,
                include: [path.join(__dirname, 'app')]
            }
        ]
    }
};
