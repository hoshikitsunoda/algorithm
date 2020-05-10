const findOddInt = array => {
  const count = array.reduce((acc, cur) => {
    if (typeof acc[cur] == 'undefined') {
      acc[cur] = 1
    } else {
      acc[cur] += 1
    }
    return acc
  }, {})

  let result = ''

  for (let i in count) {
    if (count[i] % 2 !== 0) {
      result = i
    }
  }
  return parseInt(result)
}

module.exports = findOddInt
