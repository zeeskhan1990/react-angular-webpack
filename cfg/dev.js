var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');
var srcPath = path.join(__dirname, '/../src');
var _ = require('lodash');

var baseConfig = require('./base');

// Add needed plugins here
var BowerWebpackPlugin = require('bower-webpack-plugin');
var config = _.merge({
  context:srcPath,
  entry: {
    app:[
    'webpack-dev-server/client?http://127.0.0.1:8000',
    'webpack/hot/only-dev-server',
    './time-logger-app.js'
  ],
    app2:'./time-logger-app-2.js',
    common:['jquery','angular','bootstrap']
  },
  cache: true,
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
	  new NgAnnotatePlugin({add: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2
    })
  ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
