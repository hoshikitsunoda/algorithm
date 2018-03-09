const convertHTML = require('./index.js')
const { expect } = require('chai')

describe('converts the special char to HTML entities', () => {
  it("converts & to &amp;", () => {
    expect(convertHTML("Dolce & Gabbana")).to.equal("Dolce &​amp; Gabbana")
  })
  it("converts < to &lt;", () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).to.equal("Hamburgers &​lt; Pizza &​lt; Tacos")
  })
  it("converts ' to &apos;", () => {
    expect(convertHTML("Shindler's List")).to.equal("Shindler&​apos;s List")
  })
})
