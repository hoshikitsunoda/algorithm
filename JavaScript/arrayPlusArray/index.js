const arrayPlusArray = (array1, array2) => {
  const newArray = [...array1, ...array2]
  return newArray.reduce((acc, curr) => {
    return acc + curr
  })
}

module.exports = arrayPlusArray
