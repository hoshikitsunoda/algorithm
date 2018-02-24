const palindromeForLoop = require('./index.js')
const { expect } = require('chai')

describe('palindrome', () => {
  it("checks if a given string is a palindrome", () => {
    expect(palindromeForLoop('hoshikihsoh')).to.equal(true)
  })
  it("checks if a given string is not a palindrome", () => {
    expect(palindromeForLoop('hoshiki')).to.equal(false)
  })
})
