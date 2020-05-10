const iqTest = require('./index.js')
const { expect } = require('chai')

describe('finds different entity', () => {
  it("finds the position of even number", () => {
    expect(iqTest("2 4 7 8 10")).to.equal(3)
  })
})

describe('finds different entity', () => {
    it("finds the position of even number", () => {
      expect(iqTest("1 2 2")).to.equal(1)
    })
  })