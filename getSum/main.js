// getSum takes two integers and returns sum of all number inbetween.
// if numbers are the same, return either.
// Make max and min variable with Math.max/min, and sum set to 0,
// while min is smaller than max add min to sum, return.

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
