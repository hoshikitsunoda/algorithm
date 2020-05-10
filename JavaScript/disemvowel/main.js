// disemvowel takes a string, removes the vowels then return.
// split the string, loop through and remove vowels(regex).

function disemvowel(string) {
  return string.replace(/[aeiouAEIOU]/g, '')
}

console.log(disemvowel("This website is for losers LOL!"));
