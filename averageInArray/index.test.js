const averageInArray = require('./index.js')
const { expect } = require('chai')

describe('average in array', () => {
  it("prints the average of the array", () => {
    expect(averageInArray([ 4, 4, 5, 6, 6 ])).to.equal(5)
  })
})
