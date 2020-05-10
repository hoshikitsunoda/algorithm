const numPrimorial = require('./index.js')
const { expect } = require('chai')

describe('multiplies numbers given', () => {
  it('multiplies prime numbers only', () => {
    expect(numPrimorial(3)).to.eql(30)
  })
})