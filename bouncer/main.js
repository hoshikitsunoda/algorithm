// bouncer takes an array as argument,
// returns a new array all falsey value removed.
// Set an empty array, check each item in array is true,
// if it is, push to a new array and return.

function bouncer(array) {
  const newArray = []
  array.forEach(item => {
    if(item) {
      newArray.push(item)
    }
  })
  return newArray
}

function bouncer2(array) {
  return array.filter(Boolean)
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
