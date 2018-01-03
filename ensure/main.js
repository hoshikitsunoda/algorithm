function ensure(value) {
  return value === undefined ? 'error' : value
}

console.log(ensure(undefined));
console.log(ensure(200));
