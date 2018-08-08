var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    output:
    {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module:
    {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        port:9997
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 2',
            // minify: {
            //     collapseWhitespace: true
            // },
            excludeChunks: ['contact'], //not include contact.js
            hash: true,
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack 2',
            hash: true,
            chunks: ['contact'], //include contact.js
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}