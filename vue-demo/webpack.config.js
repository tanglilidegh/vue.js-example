/**
 * Created by tanglili on 16/8/20.
 */
var webpack = require("webpack");

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        // __dirname 始终指向当前js代码文件的目录
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
        // 限制打包文件的个数
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
    ]
};