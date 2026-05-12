module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({ url: 'rebase' }),
    require('cssnano')({ preset: 'default' })
  ]
};
