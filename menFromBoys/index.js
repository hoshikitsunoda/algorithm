const menFromBoys = array => {
  const even = [];
  const odd = [];
  [...new Set(array)].filter(num => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  const sorted = even.sort((a, b) => a - b);
  const result = sorted.concat(odd.sort((a, b) => b - a));
  return result;
};

module.exports = menFromBoys;
