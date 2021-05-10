const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/", 
  },
  devServer: {
    publicPath: 'http://localhost:8080/build',
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000/'
    },
  },
  mode: process.env.NODE_ENV,
  resolve: {
  extensions: ['.js', '.jsx'],
  },
  module: {
    rules:
    [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      },
    },
  {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader']
    },
    //  {
    //    test: /\.css$/i,
    //    exclude: /node_modules/,
    //    use: [MiniCssExtractPlugin.loader, 'css-loader'],
    //  },
   ],
  },
  //  plugins: [
  //    new MiniCssExtractPlugin(),
  //  ]
};