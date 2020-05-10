// fearNotLetter takes a string(alphabetical order) as an argument,
// finds the missing letter then return it.

function fearNotLetter(string) {
  for(let i = 1; i < string.length; i++) {
    const difference = string.charCodeAt(i) - string.charCodeAt(i - 1)
    if(difference > 1) {
      const missing = string.charCodeAt(i) - 1
      return String.fromCharCode(missing)
    }
  }
  return undefined
}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("bcd"))
