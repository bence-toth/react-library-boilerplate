import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'

import HelloWorld from './index'

import './index.css'

describe('Test suit', () => {
  it('Should say "Hello World"', () => {
    render(<HelloWorld />)
    expect(typeof HelloWorld).toBe('function')
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
