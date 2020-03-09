// This is a Storybook story using the Component Story Format.
// Read more:
// - https://storybook.js.org/docs/
// - https://storybook.js.org/docs/formats/component-story-format/

import React from 'react'
import {withA11y} from '@storybook/addon-a11y'
import {text, withKnobs} from '@storybook/addon-knobs'

import HelloWorld from './index'

export default {
  title: 'Hello World',
  component: HelloWorld,
  decorators: [
    // Adding decorator for Knobs addon.
    // Read more:
    // https://github.com/storybookjs/storybook/tree/master/addons/knobs
    withKnobs,

    // Adding decorator for A11y addon.
    // Read more:
    // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    withA11y
  ]
}

export const Default = () => (
  <HelloWorld
    name={text('Name', 'John Doe')}
  />
)
