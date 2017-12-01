// digitalRoot takes number, if the number is more than two digits,
// divide number into single digit and add. Keep reducing til
// it becomes a single digit.
// split the number into array, use reduce to keep adding.

function digitalRoot(number) {
  let sum = 0
  const split = number.toString().split('')
  for(let i = 0; i < split.length; i++) {
    sum += + split[i]
  }
  return (sum.toString().length === 1) ? sum : digitalRoot(sum)
}

function digitalRoot2(n) {
  return (n - 1) % 9 + 1;
}

console.log(digitalRoot(16))
