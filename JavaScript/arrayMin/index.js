const arrayMin = (array) => {
  return array.reduce((acc, cur) => {
    return (acc < cur ? acc : cur)
  })
}

module.exports = arrayMin
