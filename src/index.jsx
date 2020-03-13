// This is the entry file of your project.
// Whatever you export here, you will be able
// to import from the package.

import React from 'react'
import classNames from 'classnames'
import {string} from 'prop-types'

import './index.css'

const DummyComponent = ({
  name
}) => (
  <article
    className={classNames('dummy', 'component')}
  >
    <h1>
      Welcome to your React library boilerplate
      {name && (
        `, ${name}`
      )}
    </h1>
    <p>
      {'Edit '}
      <code>src/index.jsx</code>
      {' and save to reload.'}
    </p>
    <p>
      {'Read '}
      <code>README.md</code>
      {' for more info.'}
    </p>
    <p>
      <a
        href='https://reactjs.org/'
        target='_blank'
        rel='noreferrer noopener'
      >
        Learn React
      </a>
    </p>
  </article>
)

DummyComponent.propTypes = {
  // Prop types declarations.
  // Read more:
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  name: string
}

DummyComponent.defaultProps = {
  // Default props.
  // Read more:
  // https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
}

export default DummyComponent
