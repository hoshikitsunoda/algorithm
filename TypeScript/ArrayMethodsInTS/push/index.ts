function push<T>(array: T[], item: T): T[] {
  array[array.length] = item
  return array
}

console.log(push([1, 2, 3], 10))
