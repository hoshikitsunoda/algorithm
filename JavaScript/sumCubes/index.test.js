const sumCubes = require('./index')
const { expect } = require('chai')

describe('prints sum of all the cubed values from 1 to n', () => {
  it('prints 9', () => {
    expect(sumCubes(2)).to.eql(9)
  })
})

describe('prints sum of all the cubed values from 1 to n', () => {
  it('prints 100', () => {
    expect(sumCubes(4)).to.eql(100)
  })
})
