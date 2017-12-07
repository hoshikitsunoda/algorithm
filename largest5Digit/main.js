// largest5Digit takes series of digit, find largest 5 digits and return it.

function largest5Digit(number) {
  const stringNum = number.toString()
  let max = parseInt(stringNum.slice(0, 5))
  for(let i = 0; i < stringNum.length; i++) {
    if(stringNum.slice(i, i + 5) > max) {
      max = parseInt(stringNum.slice(i, i + 5))
    }
  }
  return max
}

function largest5Digit2(number) {
  const stringed = number.toString()
  if(stringed.length <= 5) return Number(stringed)
  return Math.max(Number(stringed.substr(0, 5)), largest5Digit2(stringed.substr(1)))
}

console.log(largest5Digit2(1234567890));
