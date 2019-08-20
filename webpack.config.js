/* eslint-env node */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const buildDir = 'build';
const path = `${__dirname}/${buildDir}`;

module.exports = {
  entry: './src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js'
  },
  devServer: {
    contentBase: `./${buildDir}`,
    stats: 'minimal',

  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({path}),
    new HtmlPlugin({ template: './src/index.html'  })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',

          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: 'global',
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8000 },
        }
      }
    ]
  }
};