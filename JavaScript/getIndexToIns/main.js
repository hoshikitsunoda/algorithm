// getIndexToIns takes array of numbers and number as argument.
// returns the number of elements that is smaller than value of second argument.
// Sort the array ascending order, check if each element is smaller than number.
// if it is, push to a result array.

function getIndexToIns(array, number) {
  const sorted = array.sort((a, b) => a - b)
  const result = []
  console.log(sorted);
  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] < number) {
      result.push(sorted[i])
    }
  }
  return result.length
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
