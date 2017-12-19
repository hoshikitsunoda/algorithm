// write a function that will return the first 'n' elements
// of the sequence with the given common difference 'r' and
// first element 'a'. Result should be separated by comma and space.

function arithmeticSequenceElements(a, r, n) {
  let array = []
  for(let i = 0; i < n; i++) {
    array.push(a)
    a += r
  }
  return array.join(', ')
}

console.log(arithmeticSequenceElements(1, 2, 5));
