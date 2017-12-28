// Write a function that accepts an array of 10 integers
// (between 0 and 9), that returns a string of
// those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
}

function createPhoneNumber2(numbers){
  var format = "(xxx) xxx-xxxx"
  for(var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }
  return format
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
