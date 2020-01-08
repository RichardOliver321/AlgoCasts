// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }

    insert(n) {
        if(n < this.data) {
            if(this.left)
            {
                return this.left.insert(n);
            } else {
                this.left = new Node(n);
            }               
        } else {
            if(this.right) {
                return  this.right.insert(n);;
            } else {
                this.right = new Node(n);
            }
        }
    }


    contains(n) {

        if(n == this.data){
            return this;
        }

        if(n < this.data) {
            return this.left && this.left.contains(n);
        }

        if(n > this.data) {
            return this.right && this.right.contains(n);
        }

    }


}

module.exports = Node;
