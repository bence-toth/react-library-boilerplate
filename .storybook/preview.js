import {addParameters} from '@storybook/react'

const gray = percentage =>`hsl(0, 0%, ${percentage}%)`

addParameters({
  backgrounds: [
    {
      name: 'White',
      value: gray(100),
      default: true
    },
    {
      name: 'Almost white',
      value: gray(95),
      default: true
    },
    {
      name: 'Light gray',
      value: gray(75),
      default: true
    },
    {
      name: 'Gray',
      value: gray(50),
      default: true
    },
    {
      name: 'Dark gray',
      value: gray(25),
      default: true
    },
    {
      name: 'Almost black',
      value: gray(5),
      default: true
    },
    {
      name: 'Black',
      value: gray(0)
    }
  ]
})
