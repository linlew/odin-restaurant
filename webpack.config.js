const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
    //  assetModuleFilename: 'images/[hash][ext][query]',
   },
  devtool: 'inline-source-map',
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },

     {
        test: /\.txt/,
        type: 'asset/source',
    },

    {
      test: /\.png/,
      type: 'asset/resource',
    },

   ],
 },
};
