import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'

import HelloWorld from './index'

import './index.css'

describe('Test suit', () => {
  it('Should say hello', () => {
    render(<HelloWorld name='Jane Doe' />)
    expect(typeof HelloWorld).toBe('function')
    expect(screen.getByText('Hello, Jane Doe')).toBeInTheDocument()
  })
})
