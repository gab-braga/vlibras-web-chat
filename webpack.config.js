const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'vlibras.js',
    path: path.resolve('./dist'),
  },
  externals: {
    window: 'window',
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/unity', to: 'unity' },
        { from: 'src/css', to: 'css' },
        { from: 'src/assets', to: 'assets' },
        { from: 'src/js', to: 'js' },
        { from: 'src/index.html', to: 'index.html' },
      ],
    }),
  ],
};
