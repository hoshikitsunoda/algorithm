// Write a function that takes a string of braces,
// and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.

function validBraces(string) {
  const regex = /\(\)|\[\]|\{\}/g

  return (string.replace(regex, '')) ? true : false
}

console.log(validBraces("()"));
console.log(validBraces("(){}[]"));
