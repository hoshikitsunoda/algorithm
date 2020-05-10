// translatePigLatin takes string as argument,
// moves the first charactor of the string to the end,
// and suffixes "ay". If a word begins with a vowel just added,
// add way to the end.
// Create empty string variable, check if the first charactor is a vowel,
// else, check how many consonants are there.

function translatePigLatin(string) {
  const regex = /[aeiou]/gi
  if(string[0].match(regex)) {
    return string + 'way'
  }
  else {
    const consonant = string.indexOf(string.match(regex)[0])
    return string.substring(consonant).concat(string.substring(0, consonant)).concat('ay')
  }
}

console.log(translatePigLatin("california"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("eight"))
