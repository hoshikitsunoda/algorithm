// const is = <T extends unknown>(a: T, ...b: [T, ...T[]]) => {
//   return b.every((_) => _ === a)
// }

const is = <T extends unknown>(a: T, ...b: [T, ...T[]]) => {
  return b.every((item) => item === a)
}

console.log(is('string', 'otherstring'))
console.log(is(true, false))
console.log(is(42, 42))
// console.log(is(10, 'foo'))
console.log(is([1], [1, 2], [1, 2, 3]))
