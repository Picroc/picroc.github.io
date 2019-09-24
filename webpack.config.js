const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = require('./webpack/devserver');
const pugLoader = require('./webpack/pug');
const merge = require('webpack-merge');
const sassLoader = require('./webpack/sass');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([{
    entry: {
        index: PATHS.source + '/pages/index/index.js',
        blog: PATHS.source + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.source + '/pages/blog/blog.pug'
        })
    ]
},
pugLoader(),
sassLoader()
]);

module.exports = function (env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return merge([
            common,
            devServer()
        ])
    }
};