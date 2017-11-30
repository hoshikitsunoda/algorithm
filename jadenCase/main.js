// jadenCase takes a string, returns the same string but
// the first letter of each word capitalized.

function jadenCase(string) {
  const split = string.split(' ')
  return split.map(word => {
    return word[0].toUpperCase() + word.substring(1, string.length)
  }).join(' ')
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
