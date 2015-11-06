import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let config = {
  plugins: [
    // allow css to be `import`ed
    new ExtractTextPlugin('[name].css'),

    // minify all assets
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }})
  ],

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: [ 'babel-loader' ], include: path.join(__dirname, 'app') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?module&importLoaders=1&localIdentName=[name]__[hash:base64:5]!postcss') }
    ]
  }
}

export default config;
