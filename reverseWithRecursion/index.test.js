const reverseWithRecursion = require('./index.js')
const { expect } = require('chai')

describe('reverse a string', () => {
  it("prints an empty string", () => {
    expect(reverseWithRecursion("")).to.equal("")
  })
  it("reverses the given string", () => {
    expect(reverseWithRecursion("hoshiki")).to.equal("ikihsoh")
  })
})
