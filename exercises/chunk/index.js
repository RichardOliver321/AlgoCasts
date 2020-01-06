// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunk = [];

    for ( let i =0; i < array.length; i+=size) {
        chunk.push(array.slice(i, i+size));
    }

    return chunk;
    
}
// function chunk(array, size) {
//     const chunkArr = [];

//     let chunkIndex = 0;
//     for(let element of array) {
//         const last = chunkArr[chunkArr.length -1];

//         if(!last || last.length === size) {
//             chunkArr.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunkArr;
// }

module.exports = chunk;
