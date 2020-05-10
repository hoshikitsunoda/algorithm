const addTwoNumbers = (l1, l2) => {
  const result = []
  const reversedL1 = parseInt(l1.reverse().join(''))
  const reversedL2 = parseInt(l2.reverse().join(''))
  let added = (reversedL1 + reversedL2).toString()
  added = added.split('').reverse()
  added.forEach(item => {
    result.push(parseInt(item))
  })
  return result
}

module.exports = addTwoNumbers
