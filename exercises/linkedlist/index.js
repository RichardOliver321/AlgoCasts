// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(d, n = null) {
        this.data = d;
        this.next = n;
    }
}

class LinkedList {
    
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let currentNode = this.head;
        let count = 0;
       
        while (currentNode) {
            count++;
            currentNode = currentNode.next
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head)
            return null;

        let currentNode = this.head;
        while (currentNode) {
            if(!currentNode.next) {
                return currentNode;
            }
            currentNode = currentNode.next
        }  
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }
    
    removeLast() {
        if(!this.head)
            return;

        if(!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        let previous = this.head;
        while(currentNode.next) {
            previous = currentNode;
            currentNode = currentNode.next
        }
        previous.next = null;
    }
   
    insertLast(data) {
        const last = this.getLast();
    
        if (last) {
          // There are some existing nodes in our chain
          last.next = new Node(data);
        } else {
          // The chain is empty!
          this.head = new Node(data);
        }
      }

    getAt(index) {
        if(!this.head)
            return null

        if(index == 0)
            return this.head;

        let currIndex = 0;
        let currentNode = this.head
    
        while(currentNode) {
            if(currIndex == index)
                return currentNode;
            currentNode = currentNode.next;
            currIndex++;
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return;
          }
      
          if (index === 0) {
              this.head = this.head.next
              return;
          }      
      
          const previous = this.getAt(index - 1);
          if (!previous || !previous.next) {
            return;
          }
          previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
          this.head = new Node(data);
          return;
        }
    
        if (index === 0) {
          this.head = new Node(data, this.head);
          return;
        }
    
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
      }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }
    
      *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }

}

module.exports = { Node, LinkedList };
