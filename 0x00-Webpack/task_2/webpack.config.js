// task_2/webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production', // Set mode to production
    entry: './js/dashboard_main.js', // Entry point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'), // Output to public folder
        clean: true, // Clean the output directory before emit
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex for CSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Use MiniCssExtractPlugin and css-loader
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Regex for image files
                type: 'asset/resource', // Use asset/resource for image optimization
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css', // Output CSS file
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template HTML file
            filename: 'index.html', // Output HTML file
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', // Split chunks for better optimization
        },
    },
    resolve: {
        extensions: ['.js', '.css'], // Resolve JS and CSS file extensions
    },
};
