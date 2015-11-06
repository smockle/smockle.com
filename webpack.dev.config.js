import path from 'path';
import webpack from 'webpack';

let config = {
  // sourcemap support
  devtool: 'eval',

  plugins: [
    // update components without a full-page refresh
    new webpack.HotModuleReplacementPlugin(),

    // don't reload if there are syntax errors
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: [ 'react-hot', 'babel' ], include: path.join(__dirname, 'app') },
      { test: /\.css$/, loader: 'style!css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss' }
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    historyApiFallback: true
  }
}

export default config;
