// chunk takes an array and size as arguments,
// turn them into groups the length of size and returns it.
// Set an empty array variable, use for loop to iterate thru the array,
// each iteration, i increases by size and pushes array item that is
// sliced at i position to new array.

function chunk(array, size) {
  const result = []
  for(let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

console.log(chunk(["a", "b", "c", "d"], 2))
