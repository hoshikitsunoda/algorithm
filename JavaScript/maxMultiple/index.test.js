const maxMultiple = require("./index")
const { expect } = require("chai")

describe("it finds max divisible number that's under nearest bound", () => {
  it("prints 6", () => {
    expect(maxMultiple(2, 7)).to.eql(6)
  })
})

describe("it finds max divisible number that's under nearest bound", () => {
  it("prints 185", () => {
    expect(maxMultiple(37, 200)).to.eql(185)
  })
})
