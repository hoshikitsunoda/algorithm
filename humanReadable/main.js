// humanReadable takes number and returns the time in
// a human-readable format(HH:MM:SS).
// if input is 0, returns 00:00:00
// if input is 60, returns 00:01:00
// if input is 86399, returns 23:59:59

function humanReadable(seconds) {
  const pad = (x) => (x < 10) ? "0" + x : x
  return pad(parseInt(seconds / (60 * 60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

console.log(humanReadable(60));
console.log(humanReadable(359999));
