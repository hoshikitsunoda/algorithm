const modifiedSum = require('./index')
const { expect } = require('chai')

describe('modifiedSum function', () => {
  it('should return 30', () => {
    expect(modifiedSum([1, 2, 3], 3)).to.eql(30)
  })
})

describe('modifiedSum function', () => {
  it('should return 30', () => {
    expect(modifiedSum([1, 2], 5)).to.eql(30)
  })
})
