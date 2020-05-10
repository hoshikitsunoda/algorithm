const wellOfIdeas = require("./index")
const { expect } = require("chai")

describe("it counts occurance of string good", () => {
  it("prints Publish!", () => {
    expect(wellOfIdeas(["good", "bad", "bad", "bad", "bad"])).to.eql("Publish!")
  })
})

describe("it counts occurance of string good", () => {
  it("prints Fail!", () => {
    expect(wellOfIdeas(["bad", "bad", "bad"])).to.eql("Fail!")
  })
})

describe("it counts occurance of string good", () => {
  it("prints I smell a series!", () => {
    expect(
      wellOfIdeas([
        "good",
        "bad",
        "bad",
        "bad",
        "bad",
        "good",
        "bad",
        "bad",
        "good"
      ])
    ).to.eql("I smell a series!")
  })
})
