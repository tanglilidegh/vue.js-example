/**
 * Created by tanglili on 16/8/20.
 */

var webpack = require("webpack");

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: __dirname + '/dist/js',
        filename: "[name].js"
    },
    resolve: {},
    module: {
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015-loose']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
    ]
};