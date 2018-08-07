var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output:
    {
        path: 'dist',
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
            }
        ]
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
        new ExtractTextPlugin({
            filename: 'app.bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}