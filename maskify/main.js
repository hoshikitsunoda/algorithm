function maskify(string) {
  if(string.length < 4) return string
  return string.split('').slice(0, string.length - 4).join('').replace(/./g, '#') + string.substring(string.length - 4)
}

function maskify2(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
