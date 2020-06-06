function filter<T>(array: T[], callback: (item: T) => Boolean): T[] {
  let result: T[] = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i])
    }
  }
  return result
}

console.log(filter([1, 2, 3], (item) => item <= 2))
