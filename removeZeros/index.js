// Array.prototype or Object.prototype methods were prohibited for this Kata

// const removeZeros = array => {
//   const newArray = [];
//   let zeroCount = 0;
//   const zeroArray = [];
//   array.forEach(item => {
//     if (item != 0) {
//       newArray.push(item);
//     } else {
//       zeroCount++;
//     }
//   });
//   for (let i = 0; i < zeroCount; i++) {
//     zeroArray.push(0);
//   }
//   return newArray.concat(zeroArray);
// };

// const removeZeros = array => {
//   const newArray = [];
//   let zeroCount = 0;
//   const zeroArray = [];
//   array.forEach(item => {
//     if (item != 0) {
//       newArray[newArray.length] = item;
//     } else {
//       zeroCount++;
//     }
//   });
//   for (let i = 0; i < zeroCount; i++) {
//     zeroArray[zeroArray.length] = 0;
//   }
//   return [...newArray, ...zeroArray];
// };

// const removeZeros = array => {
//   const nonZero = array.filter(item => String(item) != "0");
//   const zero = array.filter(item => String(item) == "0");
//   return [...nonZero, ...zero];
// };

const filterArray = (list, cb) => {
  const array = [];
  for (var i = 0; i < list.length; i++) {
    if (cb(list[i])) {
      array[array.length] = list[i];
    }
  }
  return array;
};

const removeZeros = array => {
  const nonZero = filterArray(array, item => String(item) != "0");
  const zero = filterArray(array, item => String(item) == "0");
  return [...nonZero, ...zero];
};

module.exports = removeZeros;
