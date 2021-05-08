const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: 'http://localhost:8080/build',
    hot: true,
    compress: true,
    port: 8080,
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
  }]
  }
};