// Queue
// FIFO - First In First Out
// Time Complexity: O(1) for enqueue and O(n) for dequeue 
// Space Complexity: O(n) overall (queue grows with elements)

let data = [];
const maxSize = 5;

function enqueue(item) {
    if (data.length === maxSize) return 'Queue is full';

    data[data.length] = item;
}

enqueue(10);    // [10]
enqueue(20);    // [10, 20]
enqueue(30);    // [10, 20, 30]
console.log('Queue--->', data);     // [10, 20, 30]


function dequeue() {
    if (!data.length) return 'Queue is empty';

    const value = data[0];
    for (let i = 0; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    return value;
}


const removed = dequeue();
console.log('removed--->', removed);                // 10
console.log('Queue--->', data);                     // [20, 30]