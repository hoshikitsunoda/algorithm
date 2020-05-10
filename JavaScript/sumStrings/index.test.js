const sumStrings = require("./index.js");
const { expect } = require("chai");

describe("count odd number", () => {
  it("counts odd numbers", () => {
    expect(sumStrings("123", "456")).to.eql("579");
  });
});

describe("count odd number", () => {
  it("counts odd numbers", () => {
    expect(
      sumStrings("712569312664357328695151392", "8100824045303269669937")
    ).to.eql("712577413488402631964821329");
  });
});
