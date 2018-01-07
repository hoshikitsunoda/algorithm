// Implement a function that determines whether a string that contains only letters is an isogram.
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.

function isIsogram(string) {
  const regex = /(\w).*\1/i
  return !regex.test(string)
}

console.log(isIsogram('ada'));
console.log(isIsogram("Dermatoglyphics"));
