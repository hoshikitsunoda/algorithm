// Couldn't figure out Large number to string conversion

const sumStrings = (a, b) => {
  const sum = (parseInt(a, 10) || 0) + (parseInt(b, 10) || 0);
  return sum.toString();
};

module.exports = sumStrings;
