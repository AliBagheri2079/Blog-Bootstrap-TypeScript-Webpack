/**
 * Default modules loader for TypeScript.
 */
export const typeScript = {
  test: /\.(tsx?)$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
};

/**
 * Default modules loader for JavaScript.
 */
export const javaScript = {
  test: /\.(jsx?)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};
