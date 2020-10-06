const zero = (calc) => {
  return calc ? Math.floor(eval('0' + calc)) : 0
}
const one = (calc) => {
  return calc ? Math.floor(eval('1' + calc)) : 1
}
const two = (calc) => {
  return calc ? Math.floor(eval('2' + calc)) : 2
}
const three = (calc) => {
  return calc ? Math.floor(eval('3' + calc)) : 3
}
const four = (calc) => {
  return calc ? Math.floor(eval('4' + calc)) : 4
}
const five = (calc) => {
  return calc ? Math.floor(eval('5' + calc)) : 5
}
const six = (calc) => {
  return calc ? Math.floor(eval('6' + calc)) : 6
}
const seven = (calc) => {
  return calc ? Math.floor(eval('7' + calc)) : 7
}
const eight = (calc) => {
  return calc ? Math.floor(eval('8' + calc)) : 8
}
const nine = (calc) => {
  return calc ? Math.floor(eval('9' + calc)) : 9
}

const plus = (numFunc) => {
  return ` + ${numFunc}`
}
const minus = (numFunc) => {
  return ` - ${numFunc}`
}
const times = (numFunc) => {
  return ` * ${numFunc}`
}
const dividedBy = (numFunc) => {
  return ` / ${numFunc}`
}

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
}
