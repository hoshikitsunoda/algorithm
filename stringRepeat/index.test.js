const stringRepeat = require('./index')
const { expect } = require('chai')

describe('repeats the given string given times', () => {
  it('repeats the given string given times', () => {
    expect(stringRepeat(5, '#')).to.equal('#####')
  })
})
