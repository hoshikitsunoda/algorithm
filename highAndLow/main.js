function highAndLow(string) {
  const sorted = string.split(' ').sort((a, b) => b - a)
  return [sorted[0], sorted[sorted.length -1]].join(' ')
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
