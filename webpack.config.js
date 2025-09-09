const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    "mjml": ['./index'],
  },
  output: {
    library: {
      name: 'mjml',
      type: 'commonjs',
    },
    filename: 'index.js',
    path: path.resolve(__dirname, './lib'),
  },
  resolve: {
    alias: {
      'path': path.resolve(__dirname, 'gde-mocks/path'),
      'fs': path.resolve(__dirname, 'gde-mocks/fs'),
      // 'uglify-js': path.resolve(__dirname, 'gde-mocks/uglify-js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                "@babel/plugin-proposal-function-bind",
                "@babel/plugin-proposal-export-default-from",
              ],
              babelrc: false,
            },
          },
        ],
      },
    ],
  },
}
