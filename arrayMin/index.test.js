const arrayMin = require('./index.js')
const { expect } = require('chai')

describe('minimum in array', () => {
  it("prints the lowest number", () => {
    expect(arrayMin([100, 0, 50])).to.equal(0)
  })
})
