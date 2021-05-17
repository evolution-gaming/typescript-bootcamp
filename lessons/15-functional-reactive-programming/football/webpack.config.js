const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'none',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
              ],
              plugins: [
                ['@babel/plugin-transform-runtime'],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  }
}
