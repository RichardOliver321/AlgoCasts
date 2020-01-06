// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let revstr = n.toString().split('').reduce((rev, char) => {
        // if (char != '-'){ 
            // return char+rev
        // } javascript doesn't care that your number is: 51- it can still convert /shrug
        return char + rev
    });

    return parseInt(revstr) * Math.sign(n)

}

module.exports = reverseInt;
