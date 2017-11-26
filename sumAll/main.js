// sumAll takes an array as argument, returns the sum of
// all numbers in between include the initial numbers.
// Use Math.max() and Math.min() to get biggest and smallest number,
// then reduce both til it becomes single number.

function sumAll(array) {
  const max = Math.max(array[0], array[1])
  const min = Math.min(array[0], array[1])
  const newArray = []
  for(let i = min; i <= max; i++) {
    newArray.push(i)
  }
  const result = newArray.reduce((accumulator, current) => {
    return accumulator + current
  })
  return result
}

console.log(sumAll([1, 4])) // return 10
console.log(sumAll([5, 10])) // return 45
