const addTwoNumbers = require('./index.js')
const { expect } = require('chai')

describe('it adds two arrays of numbers and return as a linked list', () => {
  it('equals to ', () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).to.eql([7, 0, 8])
  })
})
