/**
 * Default modules loader for font assets.
 */
export const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[contenthash][ext]',
  },
};
