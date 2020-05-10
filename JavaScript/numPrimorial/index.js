const numPrimorial = num => {
  const prime = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61
  ]
  const sliced = prime.slice(0, num)
  return sliced.reduce((a, b) => a * b)
}

module.exports = numPrimorial
