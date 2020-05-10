function gracefulTipping(bill: number): number {
  let result: number = Math.ceil(bill * 1.15)
  if (result < 10) return result
  let divisive = Math.floor(Math.log10(result)) - 1
  let tipped = 5 * Math.pow(10, divisive)
  return Math.ceil(result / tipped) * tipped
}

console.log(gracefulTipping(7))
console.log(gracefulTipping(12))
console.log(gracefulTipping(86))
console.log(gracefulTipping(99))
console.log(gracefulTipping(983212))
