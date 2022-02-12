const ftoc = function(f) {
  celsius = (f-32)*5/9
  return parseFloat(celsius.toFixed(1))
};

const ctof = function(c) {
  fah = c * 9 / 5 + 32
  return parseFloat(fah.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
