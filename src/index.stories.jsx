// This is a Storybook story using the Component Story Format.
// Read more:
// - https://storybook.js.org/docs/
// - https://storybook.js.org/docs/formats/component-story-format/

import React from 'react'
import {withA11y} from '@storybook/addon-a11y'
import {text, withKnobs} from '@storybook/addon-knobs'

import DummyComponent from './index'

const story = {
  title: 'Hello World',
  component: DummyComponent,
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

const Default = () => (
  <DummyComponent />
)

const WithName = () => (
  <DummyComponent
    name={text('Name', 'John Doe')}
  />
)

export default story

export {
  Default,
  WithName
}
