// repeatString takes a string and number as arguments.
// when the function is called, it repeats the string numbers of times passed.
// return empty string if num is not a positive number.

function repeatString(string, number) {
  if(number < 0) return ''
  let newString = ''
  while(number > 0) {
    newString += string
    number--
  }
  return newString
}

// recursion

function repeatString2(string, number) {
  if(number < 0) return ''
  if(number === 1) return string
  else return string + repeatString2(string, number - 1)
}

console.log(repeatString('abc', 4))
console.log(repeatString('abc', -2))
console.log(repeatString2('abc', 2))
console.log(repeatString2('abc', -3))
