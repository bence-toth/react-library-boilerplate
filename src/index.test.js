import {render, screen} from '@testing-library/react'
import React from 'react'

import HelloWorld from './index'

// eslint-disable-next-line import/no-unassigned-import
import '@testing-library/jest-dom'

describe('Test suit', () => {
  it('Should say "Hello World"', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<HelloWorld />)
    expect(typeof HelloWorld).toBe('function')
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
