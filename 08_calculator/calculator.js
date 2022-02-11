const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
}


const multiply = function(arr) {
  return arr.reduce((a,b) => a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	total = 1;
  for (i = 1; i <= a ; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
