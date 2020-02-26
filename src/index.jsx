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
  name: string
}

HelloWorld.defaultProps = {
  name: 'John Doe'
}

export default HelloWorld
