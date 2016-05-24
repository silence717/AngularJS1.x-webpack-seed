/**
 * @description [webpack配置]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-21
 */
var path = require('path');
var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');
var NODE_MODULE_PATH = /node_modules/;
var SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    devtool: 'source-map',
    entry: {
        app:  ['webpack-hot-middleware/client?reload=true', './src/app/app.js'],
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
        new HTMLPlugin({
            template: './src/index.html',
            fileName: 'index.html',
            excludeChunks: ['app']
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude: /(node_modules|bower_components)/,
                include: SRC_PATH
            },
            // {
            //     test: /^((?!\.tpl|index).)*\.html$/,
            //     loader: 'file',
            //     exclude: NODE_MODULE_PATH,
            //     include: SRC_PATH
            // },
            {
                // test: /\.tpl\.html$/,
                test: /\.html$/,
                loaders: ['html?interpolate=true'],
                exclude: NODE_MODULE_PATH,
                include: SRC_PATH
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                includes: path.resolve(__dirname, 'node_modules/normalize.css')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash:8].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ],
                exclude: NODE_MODULE_PATH
            }
        ]
    }
};
