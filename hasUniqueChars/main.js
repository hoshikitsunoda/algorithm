// hasUniqueChars takes a string, checks if a string contains
// all unique characters, returns true if it does, false otherwise.

function hasUniqueChars(string) {
  return string.split('').every((a, b, array) => {
    return array.indexOf(a) == b
  })
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
