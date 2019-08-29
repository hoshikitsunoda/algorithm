const removeZeros = require("./index.js");
const { expect } = require("chai");

describe("count odd number", () => {
  it("counts odd numbers", () => {
    expect(
      removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])
    ).to.eql([7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]);
  });
});
