const modifiedSum = (a, n) => {
  let result = 0
  let subtract = 0
  for (let i = 0; i < a.length; i++) {
    result += Math.pow(a[i], n)
    subtract += a[i]
  }

  return result - subtract
}

module.exports = modifiedSum
