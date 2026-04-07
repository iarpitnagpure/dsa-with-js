// Doubly Linked List (DLL)
// A doubly linked list (DLL) is a type of data structure where each element (node) is connected to both its previous and next node.
// 10 ⇄ 20 ⇄ 30 ⇄ 40

// Time Complexity:
//      Append: O(1)
//      Print:  O(n)
//      Delete: O(n)
//      Insert: O(n)
//      Search: O(n)

// Overall Space Complexity of Linked List: O(n)

// | Operation | Time | Space |
// | --------- | ---- | ----- |
// | append    | O(1) | O(1)  |
// | insert    | O(n) | O(1)  |
// | delete    | O(n) | O(1)  |
// | search    | O(n) | O(1)  |
// | print     | O(n) | O(1)  |
// | overall   | —    | O(n)  |

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.data + " ⇄ ";
            current = current.next;
        }

        result += "null";
        console.log(result);
    }

    delete(index) {
        if (index < 0 || !this.head) return;

        // remove at head
        if (index === 0) {
            this.head = this.head.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }

            return;
        }

        let current = this.head;
        let counter = 0;

        // move to (index - 1)
        while (current && counter < index - 1) {
            current = current.next;
            counter++;
        }

        // index out of bounds
        if (!current || !current.next) return;

        const nodeToDelete = current.next;

        // if deleting tail
        if (nodeToDelete === this.tail) {
            this.tail = current;
            this.tail.next = null;
        } else {
            current.next = nodeToDelete.next;
            nodeToDelete.next.prev = current;
        }
    }

    insert(index, data) {
        if (index < 0) return;

        const newNode = new Node(data);

        // insert at head
        if (index === 0) {
            // Head is empty
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
                return;
            }

            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;

            return;
        }

        let current = this.head;
        let counter = 0;

        // move to (index - 1)
        while (current && counter < index - 1) {
            current = current.next;
            counter++;
        }

        // out of bounds
        if (!current) return;

        newNode.next = current.next;
        newNode.prev = current;

        if (current.next) {
            current.next.prev = newNode;
        } else {
            this.tail = newNode;
        }

        current.next = newNode;
    }

    search(data) {
        let current = this.head;
        let position = 0;

        while (current) {
            if (current.data === data) {
                return position;
            }
            position++;
            current = current.next;
        }

        return -1;
    }
}

// Creating Linked List
const list = new LinkedList();
console.log('Linked List --->', list);                  // { head: null, tail: null }


// Append Node
list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log('Linked List --->', list);
// {
//   head: <ref *1> Node {
//     data: 10,
//     prev: null,
//     next: Node { data: 20, prev: [Circular *1], next: [Node] }
//   },
//   tail: <ref *2> Node {
//     data: 40,
//     prev: Node { data: 30, prev: [Node], next: [Circular *2] },
//     next: null
//   }
// }

// Print Linked List Data
list.print();                                           // 10 ⇄ 20 ⇄ 30 ⇄ 40 ⇄ null    


// Delete Node from Linked List
list.delete(2);
list.print();                                           // 10 ⇄ 20 ⇄ 40 ⇄ null      
list.delete(2);                                         // Deleting Tail Node
list.print();                                           // 10 ⇄ 20 ⇄ null


// Insert Node from Linked List
list.insert(2, 30);
list.print();                                           // 10 ⇄ 20 ⇄ 30 ⇄ null
list.insert(3, 90);
list.print();                                           // 10 ⇄ 20 ⇄ 30 ⇄ 90 ⇄ null


// Search Node from Linked List
const index = list.search(90);
console.log('Node at index --->', index);               // 3
