const sumOfAllArrays = require("./index")
const { expect } = require("chai")

describe("it adds all elements from all the arrays given", () => {
  it("prints sum of items in an array", () => {
    expect(sumOfAllArrays([1, 2, 3])).to.eql(6)
  })
})

describe("it adds all elements from all the arrays given", () => {
  it("prints sum of items in two arrays", () => {
    expect(sumOfAllArrays([1, 2, 3], [4, 5, 6])).to.eql(21)
  })
})
