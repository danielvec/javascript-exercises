const fibonacci = function(num) {
    //take a number and add the preceding number
    if (num < 0) return "OOPS";
    if (num < 3) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
