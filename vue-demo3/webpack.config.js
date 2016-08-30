/**
 * Created by tanglili on 16/8/24.
 */
var webpack = require("webpack");

module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: __dirname + "/dist/js",
        filename: "[name].js"
    },
    module: {
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
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
        // 限制打包文件的个数
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
    ]
};