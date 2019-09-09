const combineArrays = arr => {
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? combineArrays(b) : b)
  }, [])
}

const sumOfAllArrays = (...arrays) => {
  const array = arrays.length === 1 ? arrays[0] : combineArrays(arrays)
  return array.reduce((a, b) => {
    return a + b
  })
}

module.exports = sumOfAllArrays
