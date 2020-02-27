import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

const storybookUrl = (
  (process.env.CI === 'true')
    ? `file://${process.cwd()}/storybook-dist`
    : 'http://localhost:6006/'
)

const getScreenshotOptions = () => ({
  fullPage: false
})

initStoryshots({
  suite: 'Visual snapshots',
  test: imageSnapshot({
    storybookUrl,
    getScreenshotOptions
  })
})
