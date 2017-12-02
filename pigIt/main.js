// pigIt takes a string, move the first letter of each word
// to the end of it then add 'ay' to the end of the word.

function pigIt(string) {
  const split = string.split(' ')
  const pigged = split.map(word => {
    return word.substring(1, word.length).concat(word.slice(0, 1)).concat('ay')
  })
  return pigged.join(' ')
}

console.log(pigIt('Pig latin is cool'));
