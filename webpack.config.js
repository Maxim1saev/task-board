const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),

    mode: "development",

    output: {
        filename: '[hash].js',
        path:  path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },

        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },    
        ],
  },

    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    })],

}