

module.exports = {
  stories: [
    // Stories are in the `src` folder,
    // and file names are like `*.stories.jsx`.

    // Read more:
    // https://storybook.js.org/docs/basics/writing-stories/#loading-stories
    '../src/**/*.stories.jsx'
  ],

  addons: [
    // Register addons:
    // - A11y
    // - Actions
    // - Backgrounds
    // - Knobs
    // - Links
    // - StorySource

    // Read more:
    // - https://storybook.js.org/docs/addons/introduction/
    // - https://storybook.js.org/docs/addons/using-addons/
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-storysource'
  ],

  webpackFinal: async config => {
    // You can customize Storybook's Webpack config here.
    // Read more:
    // https://storybook.js.org/docs/configurations/custom-webpack-config/
    return config
  }
}
