const meeting = require('./index.js')
const { expect } = require('chai')

describe('converts the string to upper case', () => {
  it('converts duplicates as ) and singles as (', () => {
    expect(
      meeting(
        'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
      )
    ).to.eql(
      '(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)'
    )
  })
})
