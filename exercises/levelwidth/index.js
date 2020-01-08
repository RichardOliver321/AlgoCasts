// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

    const counters = [0];

    const q = [root, null];

    while(q.length > 1) {
        node = q.shift();

        if(node === null) {
            counters.push(0);
            q.push(null);
        } else {    
            q.push(...node.children);
            counters[counters.length - 1]++;
        }

    }

    return counters;
}

module.exports = levelWidth;
