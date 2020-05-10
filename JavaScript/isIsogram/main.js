function isIsogram(string) {
  const regex = /(\w).*\1/i
  return !regex.test(string)
}

console.log(isIsogram('ada'));
console.log(isIsogram("Dermatoglyphics"));
