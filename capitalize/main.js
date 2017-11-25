// capitalize takes a string of sentence as an argument and
// return a string with the first letter capitalized.
// First, split the string at empty space, then turn the first letter to uppercase,
// concat the rest then join them into a string.

function capitalize(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase().concat(word.slice(1)))
    .join(' ')
}

console.log(capitalize('just another diamond day'))
