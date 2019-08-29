const oddCount = require("./index.js");
const { expect } = require("chai");

describe("count odd number", () => {
  it("counts odd numbers", () => {
    expect(oddCount(15)).to.eql(7);
  });
});

describe("count odd number", () => {
  it("counts odd numbers", () => {
    expect(oddCount(15023)).to.eql(7511);
  });
});
