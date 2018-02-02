/*
* @Author: linshuling
* @Date:   2018-02-02 15:05:39
* @Last Modified by:   linshuling
* @Last Modified time: 2018-02-02 17:38:02
*/
var webpack = require('webpack');

var config  = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index' : ['./src/page/index/index.js'],
        'login' : ['./src/page/login/index.js'],
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    },
    externals: {
        'jquery' : 'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        })
    ]
};

module.exports = config;