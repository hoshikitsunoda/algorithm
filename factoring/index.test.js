const factoring = require('./index.js')
const { expect } = require('chai')

describe('factorize the number', () => {
  it('factorize the given number', () => {
    expect(factoring(5)).to.equal(120)
  })
  it('returns 1', () => {
    expect(factoring(1)).to.equal(1)
  })
  it('returns 0', () => {
    expect(factoring(0)).to.equal(0)
  })
})
