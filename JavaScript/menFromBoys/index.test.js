const menFromBoys = require("./index.js");
const { expect } = require("chai");

describe("filters the array", () => {
  it("filters the array and push even number to new array", () => {
    expect(menFromBoys([7, 3, 14, 17])).to.eql([14, 17, 7, 3]);
  });
});

describe("filters the array", () => {
  it("filters the array and push even number to new array", () => {
    expect(menFromBoys([2, 43, 95, 90, 37])).to.eql([2, 90, 95, 43, 37]);
  });
});

describe("filters the array", () => {
  it("filters the array and push even number to new array", () => {
    expect(menFromBoys([20, 33, 50, 34, 43, 46])).to.eql([
      20,
      34,
      46,
      50,
      43,
      33
    ]);
  });
});
