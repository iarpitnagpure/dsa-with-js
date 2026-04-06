// Singly Linked List
// A Singly Linked List is a linear data structure where elements (called nodes) are connected using pointers.
// 10 → 20 → 30 → 90 → null

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

        // Insert at head if head if empty 
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " → ";
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
            if (!this.head) this.tail = null;

            return;
        }

        let counter = 0;
        let current = this.head;

        // move to (index - 1)
        while (current && counter < index - 1) {
            current = current.next;
            counter++;
        }

        // index out of bounds
        if (!current || !current.next) return;

        // delete node at tail and update tail to previous node
        if (current.next === this.tail) {
            this.tail = current;
        }

        current.next = current.next.next;
    }

    insert(index, data) {
        if (index < 0) return;

        const newNode = new Node(data);

        // insert at head
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;

            // if list was empty
            if (!this.tail) this.tail = newNode;

            return;
        }

        let counter = 0;
        let current = this.head;

        // move to (index - 1)
        while (current && counter < index - 1) {
            current = current.next;
            counter++;
        }

        // ❗ out of bounds
        if (!current) return;

        //  insert node
        newNode.next = current.next;
        current.next = newNode;

        // update tail if inserted at end
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    search(data) {
        let position = 0;
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return position;
            }
            current = current.next;
            position++;
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
//     head: { data: 10, next: { data: 20, next: { data: 30, next: { data: 40, next: null } } } },
//     tail: { data: 40, next: null }
// }


// Print Linked List Data
list.print();                                           // 10 → 20 → 30 → 40 → null                            


// Delete Node from Linked List
list.delete(2);
list.print();                                           // 10 → 20 → 40 → null        
list.delete(2);                                         // Deleting Tail Node
list.print();                                           // 10 → 20 → null
console.log('Linked List --->', list);
// {
//     head: { data: 10, next: { data: 20, next: null },
//     tail: { data: 20, next: null }
// }


// Insert Node from Linked List
list.insert(2, 30);                         
list.print();                                           // 10 → 20 → 30 → null
list.insert(3, 90);
list.print();                                           // 10 → 20 → 30 → 90 → null
console.log('Linked List --->', list);
// {
//     head: { data: 10, next: { data: 20, next: { data: 30, next: { data: 90, next: null } } } },
//     tail: { data: 90, next: null }
// }


// Search Node from Linked List
const index = list.search(90);
console.log('Node at index --->', index);               // 3

