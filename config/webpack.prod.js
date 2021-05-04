const { merge } = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common')

const DOMAIN = process.env.DOMAIN || 'https://mfe-test.github.io/remote-vue3/';
const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, `../build`),
    publicPath: DOMAIN,
    clean: true,
  },
  plugins: [
  ],
}

module.exports = merge(commonConfig, prodConfig)
