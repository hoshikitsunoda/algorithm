function persistence(number) {
  let split = number.toString().split('')
  let count = 0
  let result = ''
  while(split.length > 1) {
    result = split.reduce((accumulator, current) => (accumulator * current))
    count++
    split = result.toString().split('')
  }
  return count
}

console.log(persistence(39))
console.log(persistence(999))
