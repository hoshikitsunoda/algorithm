// myReplace takes string, before and after(both string),
// and returns a string with before replaced with after, preserve the case.
// Check if the after contains different case, if yes, replace with case changed,
// if no, replace before with after and return.

function myReplace(string, before, after) {
  if(before[0] === before[0].toUpperCase()) {
    const upperAfter = after[0].toUpperCase() + after.slice(1)
    return string.replace(before, upperAfter)
  }
  else {
    return string.replace(before, after)
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
