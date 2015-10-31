import path from 'path';
import webpack from 'webpack';
import AppCachePlugin from 'appcache-webpack-plugin';
import {default as production} from './webpack.prod.config';
import {default as development} from './webpack.dev.config';

const configs = {
  production: production,
  development: development
};
let config = configs.hasOwnProperty(process.env.NODE_ENV) ?
             configs[process.env.NODE_ENV] :
             configs[development];

// webpack input
config.entry = {
  app: [
    './app/routes.jsx'
  ],
  vendor: [
    'react',
    'react-dom',
    'normalize.css',
    'fontloader',
    'picturefill',
    'picturefill/src/plugins/typesupport/pf.type'
  ]
};

// webpack output
config.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'app.js'
};

config.postcss = [
  require('postcss-custom-properties')(),
  require('postcss-font-variant')(),
  require('autoprefixer')
];

config.resolve = {
  // specify paths which `from <name>` will match
  alias: {
    'fontloader': path.resolve('./node_modules/fontloader/fontloader.js')
  },
  // extensions listed here can be omitted in `import`s
  extensions: ['', '.js', '.jsx'],
  // directories which are searched implicitly in `import`s
  modulesDirectories: ['node_modules', 'components', 'assets']
};

// parsers
config.module.loaders = config.module.loaders.concat([
  { test: /\.jpe?g$|\.gif$|\.png$|\.jpf$|\.webp$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/, loader: 'file' }
]);

config.plugins = config.plugins.concat([
  // create vendor chunk
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),

  new AppCachePlugin({
    cache: [
      '/',
      'favicon.ico',
      'apple-touch-icon.png',
      'tile.png',
      'tile-wide.png',
      'humans.txt'
    ],
    network: ['*'],  // No network access allowed!
    output: 'offline.appcache'
  })
]);

module.exports = config;
