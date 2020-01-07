// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor() {
        this.stack = new Stack();
    }

    add(element) {
        this.stack.push(element);
    }

    remove() {
        const tempStack = this.copyStack(this.stack);
        let result = tempStack.pop();
        this.stack = this.copyStack(tempStack);
        return result;
    }

    peek() { 
        const tempStack = this.copyStack(this.stack);
        let result = tempStack.peek();
        this.stack = this.copyStack(tempStack);
        return result;
    }

    copyStack(stk) {
        let tempStack = new Stack()
        while( stk.peek()) {
            tempStack.push(stk.pop());
        }
        return tempStack;
    }

}

module.exports = Queue;
