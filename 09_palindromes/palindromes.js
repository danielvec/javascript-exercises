const palindromes = function (word) {
    let lc = word.toLowerCase().replace(/[^a-z]/g, "");
    return (
        lc
            .split("")
            .reverse()
            .join("") == lc           
             );
    
};

// Do not edit below this line
module.exports = palindromes;
