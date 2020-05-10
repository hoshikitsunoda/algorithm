function arithmeticSequenceElements(a, r, n) {
  let array = []
  for(let i = 0; i < n; i++) {
    array.push(a)
    a += r
  }
  return array.join(', ')
}

console.log(arithmeticSequenceElements(1, 2, 5));
