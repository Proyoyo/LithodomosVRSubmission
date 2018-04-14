var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/build');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets'),
            components: path.resolve(__dirname, 'src/components'),
            styles: path.resolve(__dirname, 'src/styles')
        }
    }
};

module.exports = config;
