const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const target = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = {
  context: PATHS.app,
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: PATHS.build
  },
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      inject: 'body',
      template: 'index.html',
      title: 'Report UI'
    })
  ],
  resolve: {extensions: ['', '.js', '.json']}
};

if (target === 'build') {
  module.exports = merge(common, {});
}

if (target === 'start' || !target) {
  module.exports = merge(common, {
    devServer: {
        contentBase: PATHS.build,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
