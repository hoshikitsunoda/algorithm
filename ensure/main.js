// Implement the ensure function so that it throws an error if called without
// arguments or an argument is undefined. Otherwise it should return the given value.

function ensure(value) {
  return value === undefined ? 'error' : value
}

console.log(ensure(undefined));
console.log(ensure(200));
