// mutation takes array as argument and returns true
// if the first element of array contains all letters of secont element.
// Set an empty array.
// Turn strings in array to lowercase, split them, loop thru and
// check if indexOf each will match.

function mutation(array) {
  const check = array[1].toLowerCase()
  const target = array[0].toLowerCase()
  for(let i = 0; i < check.length; i++) {
    if(target.indexOf(check[i]) === -1) {
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"])) // should return false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // should return true
