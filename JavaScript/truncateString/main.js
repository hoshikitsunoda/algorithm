// truncateString takes a string and num as argument,
// and return a string that its length is the same as num and end with '...'.
// First, check to see if str length is bigger than num and number is bigger than 3,
// if yes, slice at num - 3 then concat '...', if length is bigger but num isnt,
// slice at num then concat '...'. else return string.

function truncateString(string, number) {
  if(string.length > number && number > 3) {
    return string.slice(0, number - 3).concat('...')
  }
  else if(string.length > number && number < 3) {
    return string.slice(0, number).concat('...')
  }
  else {
    return string
  }
}

function truncateString2(string, number) {
  if(string.length > number) {
    return string.slice(0, number > 3 ? number - 3 : number).concat('...')
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 11));
