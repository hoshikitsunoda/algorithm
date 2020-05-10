const duplicateEncode = require('./index.js')
const { expect } = require('chai')

describe('converts letter to parentheses', () => {
  it('converts duplicates as ) and singles as (', () => {
    expect(duplicateEncode('din')).to.eql('(((')
  })
})

describe('converts letter to parentheses', () => {
  it('converts duplicates as ) and singles as (', () => {
    expect(duplicateEncode('recede')).to.eql('()()()')
  })
})
