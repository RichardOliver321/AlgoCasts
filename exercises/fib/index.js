// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



function slowFib(n) {
    if(n < 2)
        return n

    return fib(n-1) + fib(n-2)
}

function memoize(fn) {

    const cache = {};
    //Don't know how many args
    return function(...args) {
        if(cache[args])
            return cache[args]
        cache[args] = fn.apply(this, args)
        return cache[args]
    };
}

const fib = memoize(slowFib)
module.exports = fib;


//2^n run time. It nearly doubles for every run. EXPONENTIAL bad implementation
//SLOW
// function fib(n, r) {
//     if(n < 2)
//         return n

//     return fib(n-1) + fib(n-2)
// }


// function fib(n) {
//     const results = [0, 1]


//     for(let i = 2; i <= n; i++) {
//         results.push(results[i-2] + results[i-1])
//     }

//     return results[n]

// }