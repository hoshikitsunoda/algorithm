const correct = require('./index.js')
const { expect } = require('chai')

describe('correct the wrong letter', () => {
  it("correct 0 to O", () => {
    expect(correct("L0ND0N")).to.equal("LONDON")
  })
})

describe('correct the wrong letter', () => {
  it("correct 0 to O", () => {
    expect(correct("51NGAP0RE")).to.equal("SINGAPORE")
  })
})