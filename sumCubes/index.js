const sumCubes = num => {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i * i * i
  }
  return sum
}

module.exports = sumCubes
