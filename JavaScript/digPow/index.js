const digPow = (n, p) => {
  const split = n.toString().split('')
  let result = 0
  for (let i = 0; i < split.length; i++) {
    result += Math.pow(parseInt(split[i]), p + i)
  }
  const divided = result / n
  result = divided % 1 === 0 ? divided : -1

  return result
}

module.exports = digPow
