import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

const storybookUrl = (
  (process.env.CI === 'true')
    ? `file://${__dirname}/storybook-dist`
    : 'http://localhost:6006/'
)

initStoryshots({
  suite: 'Visual snapshots',
  test: imageSnapshot({
    storybookUrl
  })
})
