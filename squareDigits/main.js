// squareDigits takes a number and returns
// a string each number squared.

function squareDigits(number) {
  const splitNumber = number.toString().split('')
  return parseInt(splitNumber.map(number => Math.pow(number, 2)).join(''))
}

console.log(squareDigits(9119));
