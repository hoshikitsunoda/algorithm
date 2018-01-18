function iqTest(numbers) {
  const split = numbers.split(' ')
  let even = []
  let odd = []
  for (var i = 0; i < split.length; i++) {
    if (split[i] & 1) {
      odd.push(i + 1)
    } else {
      even.push(i + 1)
    }
  }
  return even.length === 1 ? even[0] : odd[0]
}

console.log(iqTest("2 4 7 8 10"));
