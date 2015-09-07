import path from 'path';
import webpack from 'webpack';

var production = process.env.NODE_ENV === 'production';
let config = production ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');

// webpack input
config.entry = {
  app: [
    './app/routes.jsx'
  ],
  vendor: [
    'react',
    'normalize.css',
    'fontloader'
  ]
};

// webpack output
config.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'app.js'
};

config.plugins = config.plugins.concat([
  // create vendor chunk
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
]);

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
  { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/, loader: 'file' }
]);

export default config;
