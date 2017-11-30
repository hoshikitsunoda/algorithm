// getDivisorsCnt takes number, finds the number of divisors
// of a positive integer and return it.
// Set empty array variable, loop through the number and push
// if number is dividable by i.

function getDivisorsCnt(number) {
  const temp = []
  for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        temp.push(i)
      }
  }
  return temp.length
}

console.log(getDivisorsCnt(10));
