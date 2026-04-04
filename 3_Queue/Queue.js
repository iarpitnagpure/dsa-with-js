// Queue
// FIFO - First In First Out
// Time Complexity: O(1) for enqueue and O(n) for dequeue or O(1) Check below function
// Space Complexity: O(n) overall (queue grows with elements)

let data = [];
const maxSize = 5;

function enqueue(item) {
    if (data.length === maxSize) return 'Queue is full';

    data[data.length] = item;

    return data.length;
}

console.log('enqueue--->', enqueue(10));                  // 1
console.log('enqueue--->', enqueue(20));                  // 2
console.log('enqueue--->', enqueue(30));                  // 3
console.log('enqueue--->', enqueue(40));                  // 4
console.log('enqueue--->', enqueue(50));                  // 5
console.log('enqueue--->', enqueue(60));                  // Queue is full
console.log('Queue--->', data);                           // [10, 20, 30, 40, 50]


// Time Complexity: O(n)
// Space Complexity: O(n)
function dequeue() {
    if (!data.length) return 'Queue is empty';

    const value = data[0];
    for (let i = 0; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;

    return value;
}

console.log('dequeue--->', dequeue());                      // 10
console.log('Queue--->', data);                             // [20, 30, 40, 50]


// Time Complexity: O(1), Space Complexity: O(1)
// Note: Original queue remains unchanged.
let front = 0;
function dequeue1() {
    if (front === data.length) return 'Queue is empty';

    const value = data[front];
    front++; 

    return value;
}

console.log('dequeue1--->', dequeue1());                     // 20
console.log('Queue--->', data);                              // [20, 30, 40, 50]