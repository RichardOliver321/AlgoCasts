// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanup(stringA) === cleanup(stringB) 
}

function cleanup(str) {
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join()
}


module.exports = anagrams;



// function anagrams(stringA, stringB) {
//     strA = createCharacterMap(stringA);
//     strB = createCharacterMap(stringB);

//     if(Object.keys(strA).length != Object.keys(strB).length) {
//         return false;
//     }

//     for(char in strA) {
//         console.log(char)
//         if(strA[char] != strB[char])
//             return false;
//     }

//     return true;
// }

// function createCharacterMap(str) {
//     const charMap = {};

//     const chars = str.replace(/[^\w]/g, '').toLowerCase();

//     for (let char of chars) {
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     return charMap;
// }