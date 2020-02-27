import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

if (process.env.CI !== 'true') {
  initStoryshots({
    suite: 'Visual snapshots',
    test: imageSnapshot({
      storybookUrl: 'http://localhost:6006/'
    })
  })
}
