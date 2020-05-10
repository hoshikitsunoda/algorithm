const removeChar = require('./index.js')
const { expect } = require('chai')

describe('remove characters', () => {
  it("removes first and last characters from the string", () => {
    expect(removeChar('eloquent')).to.equal('loquen')
  })
})