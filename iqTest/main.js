// write a program that among the given numbers finds one that is different in evenness,
// and return a position of this number.
// loop thru numbers and find different number, store it as variable then return indexof that number.

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
