// isValidWalk takes an array, returns true if
// total walk time is 10 mins and be at the starting position, else false.
// set x and y variable to 0, for loop and count up or down
// according to direction. check if length is 10 and x and y are 0.

function isValidWalk(array) {
  let x = 0
  let y = 0

  for(let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case 'n':
        y++
        break
      case 's':
        y--
        break
      case 'e':
        x++
        break
      case 'w':
        x--
        break
    }
  }
  return (array.length === 10 && x === 0 && y === 0) ? true : false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
