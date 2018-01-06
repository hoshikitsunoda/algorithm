// Take a sentence (string) and reverse each letter in each word in the sentence.
// Do not reverse the order of the words, just the letters in each word.

function reverser(string) {
  const split = string.split(' ')
  const reversed = split.map(word => {
    return word.split('').reverse().join('')
  })
  return reversed.join(' ')
}

console.log(reverser("Hi mom"));
