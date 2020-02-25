import HelloWorld from './index'

describe('Test suit', () => {
  it('Should be a function', () => {
    expect(typeof HelloWorld).toBe('function')
  })
})

export default HelloWorld
