import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

if (process.env.CI !== 'true') {
  initStoryshots({
    // Setting up visual snapshots.
    // Read more:
    // https://storybook.js.org/docs/testing/automated-visual-testing/
    suite: 'Visual snapshots',
    test: imageSnapshot({
      storybookUrl: 'http://localhost:6006/'
    })
  })
}
else {
  describe('Visual snapshots', () => {
    // Preventing visual snapshots from running in CI.
    // This is due to:
    // - https://storybook.js.org/docs/testing/automated-visual-testing/#challenges
    // - https://github.com/bence-toth/react-library-boilerplate/issues/51
    it('are disabled due to font smoothing issues', () => {
      expect(true).toBe(true)
    })
  })
}
