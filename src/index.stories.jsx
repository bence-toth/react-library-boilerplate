import React from 'react'
import {text, withKnobs} from '@storybook/addon-knobs'

import HelloWorld from './index'

export default {
  title: 'Hello World',
  component: HelloWorld,
  decorators: [withKnobs]
}

export const Default = () => (
  <HelloWorld
    name={text('Name', 'John Doe')}
  />
)
