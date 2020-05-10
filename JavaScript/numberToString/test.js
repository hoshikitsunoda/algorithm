const numberToString = require('./index.js')
const { expect } = require('chai')

describe('title case', () => {
  it("converts number to string", () => {
    expect(numberToString(67)).to.equal('67')
  })
  it("converts number to string", () => {
    expect(numberToString(167)).to.equal('167')
  })
})
