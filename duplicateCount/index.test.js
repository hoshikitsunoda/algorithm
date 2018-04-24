const duplicateCount = require('./index.js')
const { expect } = require('chai')

describe('prints the number of duplicate value', () => {
    it('prints 0 because theres no duplicates', () => {
        expect(duplicateCount("abcde")).to.equal(0)
    })
})

describe('prints the number of duplicate value', () => {
    it('prints 2 because a b are duplicates', () => {
        expect(duplicateCount("aabbcde")).to.equal(2)
    })
})