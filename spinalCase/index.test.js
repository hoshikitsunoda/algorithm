const spinalCase = require('./index.js');
const { expect } = require('chai')

describe('Convert a string to spinal case.', () => {
  it('converts space to dash', () => {
    expect(spinalCase("This Is Spinal Tap")).to.equal("this-is-spinal-tap")
  })
  it('converts upper case to lower and fill space with dash', () => {
    expect(spinalCase("thisIsSpinalTap")).to.equal("this-is-spinal-tap")
  })
  it('converts underscore to dash', () => {
    expect(spinalCase("The_Andy_Griffith_Show")).to.equal("the-andy-griffith-show")
  })
})
