module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async config => {
    // You can customize Storybook's Webpack config here.
    // Read more: https://storybook.js.org/docs/configurations/custom-webpack-config/
    return config
  }
}
