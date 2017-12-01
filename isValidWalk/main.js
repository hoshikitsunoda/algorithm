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
