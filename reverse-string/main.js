// reverseString takes a string as an argument
// Split the string, reverse it, then join them back into a string.
// another way, create emptry array variable reverse for loop through the string,
// push the letters into empty array and join them then return it.

function reverseString(str) {
  return str.split('').reverse().join('')
}

function reverseString2(str) {
  const array = []
  for(let i = str.length - 1; i >= 0; i--) {
    array.push(str[i])
  }
  const newString = array.join('')
  return newString
}

console.log(reverseString('hoshiki'))
console.log(reverseString2('ashley'))
