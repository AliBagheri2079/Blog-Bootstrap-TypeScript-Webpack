// Import Configuration.
import { htmlWebpackPlugin, copyWebpackPlugin, eSLintWebpackPlugin } from './plugins';
import { paths, config } from './configuration';
import { scss, fonts, images, javaScript, typeScript } from './modules';

/**
 * Entry point for the bundle.
 */
const entry = [`${paths.src}/index.ts`, `${paths.src}/assets/sass/main.scss`];

/**
 * Set output file name and path.
 */
const output = {
  publicPath: '/',
  path: paths.dist,
  filename: config.JS_FILE_OUTPUT,
};

/**
 * Shared plugins.
 */
const plugins = [htmlWebpackPlugin, copyWebpackPlugin, eSLintWebpackPlugin];

/**
 * Shared modules.
 */
const module = {
  rules: [scss, fonts, images, javaScript, typeScript],
};

/**
 * Resolve extensions.
 * Alias for @ set to paths.src directory.
 */
const resolve = {
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  alias: {
    '@': paths.src,
  },
};

/**
 * Optimization items.
 */
const optimization = {
  splitChunks: {
    // include all types of chunks
    chunks: 'all',
    // for purge css
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.s[ac]ss$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
};

/**
 * Webpack common configuration.
 */
export const WebpackCommonConfig = {
  entry,
  output,
  plugins,
  resolve,
  optimization,
  module,
  context: __dirname,
  target: config.IS_DEV ? 'web' : 'browserslist',
  mode: config.IS_DEV ? 'development' : 'production',
};
