// this will only take string as second argument
function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value)
}

// Reference
// this will take any type as second argument
// function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
//   return f(...args)
// }
// this takes number as second arg
// function fill(length: number, value: number): number[] {
//   return Array.from({ length }, () => value)
// }

console.log(call(fill, 10, 'a'))
