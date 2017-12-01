function countBits(number) {
  const binary = number.toString(2)
  const bits = binary.split('')
  const array = []
  for(let i = 0; i < bits.length; i++) {
    if(bits[i] === '1') {
      array.push(bits[i])
    }
  }
  return array.length
}

function countBits2(number) {
  return number
    .toString(2)
    .split('')
    .filter(item => item == 1)
    .length
}

console.log(countBits(7));
console.log(countBits2(10));
