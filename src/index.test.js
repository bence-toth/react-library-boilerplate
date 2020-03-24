// This is a test file for Jest using React testing library.
// Read more:
// - https://jestjs.io/
// - https://testing-library.com/docs/react-testing-library/intro

import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'

import DummyComponent from './index'

describe('Dummy component', () => {
  it('should show intro', () => {
    render((
      <DummyComponent />
    ))

    const heading = 'Welcome to your React library boilerplate'
    const headingElement = screen.getByText(heading)
    expect(headingElement)
      .toBeInTheDocument()

    const getTextContent = text => ((
      (_, element) => (element.textContent === text)
    ))
    const instructionLines = [
      'Edit src/index.jsx and save to reload.',
      'Read README.md for more info.'
    ]
    const instructionLineElements = instructionLines.map(line => (
      screen.getByText(getTextContent(line))
    ))
    instructionLineElements.forEach(element => {
      expect(element)
        .toBeInTheDocument()
    })

    const instructionLine1 = 'Edit src/index.jsx and save to reload.'
    const instructionLine1Element = screen.getByText(getTextContent(instructionLine1))
    const instructionLine2 = 'Read README.md for more info.'
    const instructionLine2Element = screen.getByText(getTextContent(instructionLine2))
    expect(instructionLine1Element)
      .toBeInTheDocument()
    expect(instructionLine2Element)
      .toBeInTheDocument()

    const linkElement = screen.getByText('Learn React')
    expect(linkElement)
      .toBeInTheDocument()
    expect(linkElement.closest('a'))
      .toHaveAttribute('href', 'https://reactjs.org/')
  })

  it('should include name when specified', () => {
    render((
      <DummyComponent
        name='John Doe'
      />
    ))

    const heading = 'Welcome to your React library boilerplate, John Doe'
    const headingElement = screen.getByText(heading)
    expect(headingElement)
      .toBeInTheDocument()
  })
})
