// booWho takes string or object as a parameter,
// check if a value is classified as a boolean primitive.
// Use new Boolean method to check the argument.

function booWho(item) {
  if(typeof(item) === 'boolean') {
    return true
  }
  else {
    return false
  }
}

function booWho2(item) {
  return typeof item === 'boolean'
}

console.log(booWho([1, 2, 3]))
console.log(booWho(false))
console.log(booWho2({ "a": 1 }));
