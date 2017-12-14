// persistence takes number its multiplicative persistence,
// which is the number of times you must multiply the digits in num
// until you reach a single digit.

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

console.log(persistence(39));  // should return 3
console.log(persistence(999)); // should return 4
