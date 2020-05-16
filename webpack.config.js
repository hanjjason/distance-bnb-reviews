const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.m?js$/
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  resolve: {
    extensions: ['.js','.jsx', '.json', '.css']
  }
};