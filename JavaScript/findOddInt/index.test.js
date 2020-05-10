const findOddint = require('./index')
const { expect } = require('chai')

describe('finds the integer that appears odd number of times', () => {
  it('prints 5', () => {
    expect(findOddint([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).to.eql(5)
  })
})
