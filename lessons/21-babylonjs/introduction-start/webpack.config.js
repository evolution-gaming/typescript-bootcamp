const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'source-map',
    output: {
      filename: '[name].main.js',
      path: path.resolve(__dirname, 'bin'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.glsl$/,
          use: {
              loader: "webpack-glsl-minify",
              options: {
                  output: "source",
                  esModule: true,
                  preserveAll: true,
              },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './bin/index.html',
      }),
    ],
    devServer: {
        compress: true,
        port: 4444,
        client: {
          overlay: true,
          progress: true,
        },
        hot: true,
    }
  }
