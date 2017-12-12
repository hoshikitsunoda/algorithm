// dirReduc takes set of directions(arry or object),
// returns  an array of strings with the needless
// directions removed (W<->E or S<->N side by side).

function dirReduc(array) {
  let i = 0
  while(i < array.length) {
    if((array[i] === "NORTH" && array[i + 1] === "SOUTH") ||
    (array[i] === "SOUTH" && array[i + 1] === "NORTH") ||
    (array[i] === "EAST" && array[i + 1] === "WEST") ||
    (array[i] === "WEST" && array[i + 1] === "EAST")) {
      array.splice(i, 2)
      i--
    }
    else {
      i++
    }
  }
  return array
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
