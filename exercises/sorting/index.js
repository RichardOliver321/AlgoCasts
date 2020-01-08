// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//n^2
function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr.length -1; k++) {
            if(arr[k] > arr[k+1]){
                let tmp = arr[k+1];
                arr[k+1] = arr[k] 
                arr[k] = tmp;
            }
        }
    }

    return arr;
}

//n^2
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        indexOfMin = i;

        for(let k = i+1; k < arr.length; k++) {
            if(arr[k] < arr[indexOfMin]){
                indexOfMin = k;
            }
        }

        if(indexOfMin !== i) {
            let tmp = arr[indexOfMin];
            arr[indexOfMin] = arr[i]; 
            arr[i] = tmp;
        }
    }
    return arr;
}

//n*log(n)
function mergeSort(arr) {
    if(arr.length === 1)
        return arr;

    const centre = Math.floor(arr.length/2);
        
    return merge(mergeSort(arr.slice(0, centre)),mergeSort(arr.slice(centre)))
}

function merge(left, right) {

    let result = []

    while(left.length && right.length) {
        if(left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    
    return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
