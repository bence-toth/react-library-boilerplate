import {addParameters} from '@storybook/react'

addParameters({
  backgrounds: [
    {
      name: 'white',
      value: 'hsl(0, 0%, 100%)',
      default: true
    },
    {
      name: 'light gray',
      value: 'hsl(0, 0%, 75%)',
      default: true
    },
    {
      name: 'gray',
      value: 'hsl(0, 0%, 50%)',
      default: true
    },
    {
      name: 'dark gray',
      value: 'hsl(0, 0%, 25%)',
      default: true
    },
    {
      name: 'black',
      value: 'hsl(0, 0%, 0%)'
    }
  ]
})
