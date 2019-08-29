const multiple3or5 = require('./index.js')
const { expect } = require('chai')

describe('filters the array', () => {
  it('filters the array and push even number to new array', () => {
    expect(multiple3or5(10)).to.eql(23)
  })
})
