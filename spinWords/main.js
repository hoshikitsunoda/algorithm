// spinWords takes a string, returns the same string but
// words with more than 5 letters are reversed.
// Split the string with ' ', check if each one is more than 5 letters,
// if it is, reverse the word then join all.

function spinWords(string) {
  const split = string.split(' ')
  return split.map(word => {
    if(word.length >= 5) {
      return word.split('').reverse().join('')
    }
    return word
  }).join(' ')
}

console.log(spinWords("Hey fellow warriors"));
