const digPow = require('./index')
const { expect } = require('chai')

describe('digPow function', () => {
  it('should return 1', () => {
    expect(digPow(89, 1)).to.eql(1)
  })
})

describe('digPow function', () => {
  it('should return 51', () => {
    expect(digPow(46288, 3)).to.eql(51)
  })
})

describe('digPow function', () => {
  it('should return 2', () => {
    expect(digPow(695, 2)).to.eql(2)
  })
})

describe('digPow function', () => {
  it('should return -1', () => {
    expect(digPow(92, 1)).to.eql(-1)
  })
})
