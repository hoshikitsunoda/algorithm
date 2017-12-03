function getSum(a, b) {
  const max = Math.max(a, b)
  let min = Math.min(a, b)
  let sum = 0
  while(min <= max) {
    sum += min++
  }
  return (a === b) ? a : sum
}

console.log(getSum(-1, 2));
