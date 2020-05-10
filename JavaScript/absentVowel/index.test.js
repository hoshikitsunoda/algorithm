const absentVowel = require('./index')
const { expect } = require('chai')

describe('finds missing vowel and prints number accordingly', () => {
  it('prints 0', () => {
    expect(absentVowel('John Doe hs seven red pples under his bsket')).to.eql(0)
  })
})

describe('finds missing vowel and prints number accordingly', () => {
  it('prints 3', () => {
    expect(
      absentVowel('Bb Smith sent us six neatly arranged range bicycles')
    ).to.eql(3)
  })
})
