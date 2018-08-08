var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: './src/app.js',
    output:
    {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
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
        port:9998
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 2',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Contact',
            hash: true,
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