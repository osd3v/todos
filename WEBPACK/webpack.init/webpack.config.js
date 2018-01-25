const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        // index:'./src/index.js',
        app: './src/index.js',
        print: './src/print.js'
    },
    devServer: {
        contentBase: './dist'
    },
    devtool: 'inline-source-map',
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:
        {
            rules: [
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }
                , { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
                , {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                    use: ['file-loader']
                }
            ]
        },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: 'src/index.html'
            }
        )
    ]
};