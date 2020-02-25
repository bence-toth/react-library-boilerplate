/* eslint-disable import/no-unused-modules */
// TODO: See if this ↑↑↑ can be configured
// to be ignored in Storybook story  files

import React from 'react'

import HelloWorld from './index'

export default {
  title: 'Hello World',
  component: HelloWorld
}

export const Default = () => (
  <HelloWorld />
)
