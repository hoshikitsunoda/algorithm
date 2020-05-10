function humanReadable(seconds) {
  const pad = (x) => (x < 10) ? "0" + x : x
  return pad(parseInt(seconds / (60 * 60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

console.log(humanReadable(60));
console.log(humanReadable(359999));
