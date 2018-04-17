const order = require('./index.js')
const { expect } = require('chai')

describe('sort order', () => {
  it("returns sorted string", () => {
    expect(order("is2 Thi1s T4est 3a")).to.equal("Thi1s is2 3a T4est")
  })
})

describe('sort order', () => {
    it("returns empty string", () => {
      expect(order("")).to.equal("")
    })
  })