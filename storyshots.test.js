import initStoryshots from '@storybook/addon-storyshots'
import {render} from '@testing-library/react'

const reactTestingLibrarySerializer = {
  print: (value, serialize) => serialize(value.container.firstChild),
  // eslint-disable-next-line no-prototype-builtins
  test: value => value?.hasOwnProperty('container')
}

initStoryshots({
  // Setting up structural snapshots.
  // Read more:
  // https://storybook.js.org/docs/testing/structural-testing/
  suite: 'Structural snapshots',
  framework: 'react',
  renderer: render,
  snapshotSerializers: [
    reactTestingLibrarySerializer
  ]
})
