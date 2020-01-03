const houseNumbersSum = require('./index')
const { expect } = require('chai')

describe('get sum of all house numbers before first 0', () => {
  it('prints 11', () => {
    expect(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])).to.eql(11)
  })
})
