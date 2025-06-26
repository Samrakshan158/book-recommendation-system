const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const htmlFiles = fs.readdirSync('./src').filter(file => file.endsWith('.html'));

module.exports = {
  entry: {
    admin: './src/js/admin.js',
    auth: './src/js/auth.js',
    dashboard: './src/js/dashboard.js',
    logout: './src/js/logout.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    ...htmlFiles.map(
      file =>
        new HtmlWebpackPlugin({
          filename: file,
          template: `./src/${file}`,
          chunks: [], // disable auto script inject — we handle it manually
        })
    ),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/css', to: 'css' },
      ],
    }),
  ],
  mode: 'development',
  devServer: {
    static: './dist',
    open: true,
  },
};
