const removeFromArray = function(array, item) {
    index = array.indexOf(item);
    array.splice(index, 1);
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
