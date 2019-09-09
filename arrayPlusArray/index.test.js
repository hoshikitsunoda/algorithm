const arrayPlusArray = require("./index")
const { expect } = require("chai")

describe("prints the sum of all arrays given", () => {
  it("prints 21", () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).to.eql(21)
  })
})
