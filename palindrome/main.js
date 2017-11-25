// palindrome takes a string as an argument.
// First, split up the string, reverse it then join them into a string.

function palindrome(str) {
  if(str.split('').reverse().join('') === str) {
    return true
  }
  else
  {
    return false
  }
}

// in terms of reduce

function palindrome2(str) {
  const newStr = str.split('').reduce((accumulator, letter) => letter + accumulator, '')
  if(newStr === str) {
    return true
  }
  else
  {
    return false
  }
}

console.log(palindrome('racecar')) //should return true
console.log(palindrome('hoshiki')) //should return false
console.log(palindrome2('racecar')) //should return true
console.log(palindrome2('ashley')) //should return false
