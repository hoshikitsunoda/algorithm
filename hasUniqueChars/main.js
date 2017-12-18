function hasUniqueChars(string) {
  return string.split('').every((a, b, array) => {
    return array.indexOf(a) == b
  })
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
