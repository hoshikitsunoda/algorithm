function squareDigits(number) {
  const splitNumber = number.toString().split('')
  return parseInt(splitNumber.map(number => Math.pow(number, 2)).join(''))
}

console.log(squareDigits(9119));
