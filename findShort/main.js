// findShort takes a strong and returns length of the shortest word.
// split, sort and length of first item.

function findShort(string) {
  return string.split(' ').sort((x, y) => x.length - y.length)[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
