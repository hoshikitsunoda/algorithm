const longest = require('./index.js')
const { expect } = require('chai')

describe('finds the longest word', () => {
  it("prints the length of the longest word in array", () => {
    expect(longest(['simple', 'is', 'better', 'than', 'complex'])).to.equal(7)
  })
})

describe('finds the longest word', () => {
  it("prints the length of the longest word in array", () => {
    expect(longest(['explicit', 'is', 'better', 'than', 'implicit'])).to.equal(8)
  })
})