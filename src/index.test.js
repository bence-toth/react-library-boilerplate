// This is a test file for Jest using React testing library.
// Read more:
// - https://jestjs.io/
// - https://testing-library.com/docs/react-testing-library/intro

import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'

import HelloWorld from './index'

describe('HelloWorld component', () => {
  it('Should say hello', () => {
    render(<HelloWorld name='Jane Doe' />)
    expect(screen.getByText('Hello, Jane Doe')).toBeInTheDocument()
  })
  it('Should fall back to default name', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello, John Doe')).toBeInTheDocument()
  })
})
