const missingHTML = require('./index.js')
const { expect } = require('chai')

describe('finds missing HTML element', () => {
  it("prints missing HTML element", () => {
    expect(missingHTML('<div><p><b>Hello</p><div>')).to.equal('b')
  })
})

describe('finds missing HTML element', () => {
    it("prints true because there's no missing HTML", () => {
      expect(missingHTML('<div><p><b>Hello</b></p><div>')).to.equal(true)
    })
  })