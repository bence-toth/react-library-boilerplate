import React from 'react'
import {withA11y} from '@storybook/addon-a11y'
import {text, withKnobs} from '@storybook/addon-knobs'

import HelloWorld from './index'

export default {
  title: 'Hello World',
  component: HelloWorld,
  decorators: [
    withKnobs,
    withA11y
  ]
}

export const Default = () => (
  <HelloWorld
    name={text('Name', 'John Doe')}
  />
)
