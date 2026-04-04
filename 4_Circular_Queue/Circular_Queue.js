// Cicular Queue
// A Circular Queue is a type of queue in which the last position is connected back to the first position, forming a circle.
// Time Complexity: Enqueue → O(1) & Dequeue → O(1)
// Space Complexity: O(n)

// Key Feature
// Uses modulo (%) operator for wrap-around:
// (rear + 1) % maxSize

let data = [];
let front = -1;
let rear = -1
const maxSize = 5;

function enqueue(item) {
    if ((rear + 1) % maxSize === front) return 'Queue is full';

    if (front === -1) {
        front = 0;
    }

    rear = (rear + 1) % maxSize;
    data[rear] = item;
    
    return data.length;
}

console.log('enqueue--->', enqueue(10));                  // 1
console.log('enqueue--->', enqueue(20));                  // 2
console.log('enqueue--->', enqueue(30));                  // 3
console.log('enqueue--->', enqueue(40));                  // 4
console.log('enqueue--->', enqueue(50));                  // 5
console.log('enqueue--->', enqueue(60));                  // Queue is full
console.log('Queue--->', data);                           // [ 10, 20, 30, 40, 50 ]


function dequeue() {
    if (front === -1) return 'Queue is empty';

    const value = data[front];
    if (front === rear) {
        front = -1;
        rear = -1;
    } else {
        front = (front + 1) % maxSize;
    }
    return value;
}

console.log('dequeue--->', dequeue());                      // 10
console.log('Queue--->', data);                             // [ 10, 20, 30, 40, 50 ]
console.log('enqueue--->', enqueue(100));                   // 5
console.log('Queue--->', data);                             // [ 100, 20, 30, 40, 50 ]
console.log('dequeue--->', dequeue());                      // 20
console.log('dequeue--->', dequeue());                      // 30
console.log('dequeue--->', dequeue());                      // 40
console.log('dequeue--->', dequeue());                      // 50
console.log('dequeue--->', dequeue());                      // 100
console.log('dequeue--->', dequeue());                      // Queue is empty
