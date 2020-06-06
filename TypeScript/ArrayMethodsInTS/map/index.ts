function map<T, U>(array: T[], callback: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i])
  }
  return result
}

console.log(map([1, 2, 3], (item) => item * 2))