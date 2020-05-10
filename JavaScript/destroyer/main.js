// destroyer takes an array as first argument,
// followed by one or more arguments. removes all elements from
// initial array that are the same value as arguments and return.
// Filter out the array with all arguments. Use var args = Array.prototype.slice.call(arguments).

function destroyer(array) {
  const args = Array.prototype.slice.call(arguments)
  for(let i = 0; i < array.length; i++) {
    return array.filter(item => !args.includes(item))
  }
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
