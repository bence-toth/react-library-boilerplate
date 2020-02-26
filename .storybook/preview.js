import {addParameters} from '@storybook/react'

addParameters({
  backgrounds: [
    {
      name: 'White',
      value: 'hsl(0, 0%, 100%)',
      default: true
    },
    {
      name: 'Almost white',
      value: 'hsl(0, 0%, 95%)',
      default: true
    },
    {
      name: 'Light gray',
      value: 'hsl(0, 0%, 75%)',
      default: true
    },
    {
      name: 'Gray',
      value: 'hsl(0, 0%, 50%)',
      default: true
    },
    {
      name: 'Dark gray',
      value: 'hsl(0, 0%, 25%)',
      default: true
    },
    {
      name: 'Almost black',
      value: 'hsl(0, 0%, 5%)',
      default: true
    },
    {
      name: 'Black',
      value: 'hsl(0, 0%, 0%)'
    }
  ]
})
