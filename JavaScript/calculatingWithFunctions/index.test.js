const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require('./index')
const { expect } = require('chai')

describe('multiply', () => {
  it('multiplies the given number function', () => {
    expect(seven(times(five()))).to.eql(35)
  })
})

describe('add', () => {
  it('adds the given number function', () => {
    expect(five(plus(five()))).to.eql(10)
  })
})

describe('subtract', () => {
  it('subtracts the given number function', () => {
    expect(seven(minus(five()))).to.eql(2)
  })
})

describe('divide', () => {
  it('divides the given number function', () => {
    expect(eight(dividedBy(three()))).to.eql(2)
  })
})
