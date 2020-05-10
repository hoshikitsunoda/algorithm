function averageInArray(array) {
  const temp = array.reduce((acc, cur) => {
    return acc + cur
  })
  return temp / array.length
}

module.exports = averageInArray
