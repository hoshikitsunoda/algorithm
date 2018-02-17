const titleCase = require('./index.js')
const { expect } = require('chai')

describe('title case', () => {
  it("capitalizes the first letter", () => {
    expect(titleCase('the quick brown fox jumps over the lazy dog')).to.equal('The Quick Brown Fox Jumps Over The Lazy Dog')
  })
})
