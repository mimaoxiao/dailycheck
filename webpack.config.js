const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
      app:'./src/index.js',
      print:'./src/print.js'
  },
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title:'OM'
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:{
      rule:[
          {
              test: /\.css$/,
              use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader?modules&localIdentName=[name]-[hash:base64:5]'
                }
            ]
          }
      ]
  }
};
