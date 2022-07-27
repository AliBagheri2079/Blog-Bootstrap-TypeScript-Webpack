module.exports = {
  '*.{js,jsx,json,ts,tsx}': 'eslint',
  '*.{ts,tsx}': () => 'yarn check-types',
};
