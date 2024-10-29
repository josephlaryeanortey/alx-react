const path = require("path");

module.exports = {
  mode: 'production', // Set the mode to production
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'), // Entry point for your application
  },
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory for the bundled files
    filename: 'bundle.js', // Output filename
    clean: true, // Clean the output directory before each build
  },
  performance: {
    maxAssetSize: 1000000, // Maximum asset size (1 MB)
    maxEntrypointSize: 1000000, // Maximum entry point size (1 MB)
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Match .css files
        use: ["style-loader", "css-loader"], // Loaders for CSS
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|svg)$/i, // Match image files
        type: 'asset/resource', // Automatically optimize images
        // No need for file-loader since asset/resource handles it
      },
    ],
  },
  // Optimization settings for images can be added if needed
};
