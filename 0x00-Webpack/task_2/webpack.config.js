// webpack.config.js

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js', // Entry point
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'public'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JS files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Optimize images
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]', // Preserve original file names
                        outputPath: 'assets/', // Output images in a specific directory
                    },
                },
            },
        ],
    },
};
