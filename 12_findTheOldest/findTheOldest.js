const findTheOldest = function(obj) {
    const ageSort = obj.sort(function(a, b) {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear()
        }
        else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear()
        }
        const first = a.yearOfDeath - a.yearOfBirth;
        const second = b.yearOfDeath - b.yearOfBirth; 
        return first > second ? -1 : 1;
    })
    return ageSort[0];
}

// Do not edit below this line
module.exports = findTheOldest;
