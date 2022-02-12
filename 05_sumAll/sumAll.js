const sumAll = function(first, last) {
    sum = 0;
    if (first < 0 || last < 0 || isNaN(first) || isNaN(last)) {
        return "ERROR"
    }
    else if (last > first) {
        for (i = first; i <= last; i++) {
            sum += i;
    }}
    else if (first > last) {
        for (i = last; i <= first; i++)
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
