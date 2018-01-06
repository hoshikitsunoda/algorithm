function reverser(string) {
  const split = string.split(' ')
  const reversed = split.map(word => {
    return word.split('').reverse().join('')
  })
  return reversed.join(' ')
}

console.log(reverser("Hi mom"));
