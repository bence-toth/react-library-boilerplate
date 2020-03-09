// This is the entry file of your project.
// Whatever you export here, you will be able
// to import from the package.

import React from 'react'
import {string} from 'prop-types'

import './index.css'

const HelloWorld = ({
  name
}) => (
  <p className='helloWorld'>
    {'Hello, '}
    {name}
  </p>
)

HelloWorld.propTypes = {
  // Prop types declarations.
  // Read more:
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  name: string
}

HelloWorld.defaultProps = {
  // Default props.
  // Read more:
  // https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
  name: 'John Doe'
}

export default HelloWorld
