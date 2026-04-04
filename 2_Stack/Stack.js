// Stack
// LIFO - Last In First Out
// Time Complexity: O(1) for push and pop
// Space Complexity: O(n) overall (stack grows with elements)

let data = [];
const maxSize = 5;

function push(item) {
    if (data.length === maxSize) return 'Stack is full';
    data[data.length] = item;
}

push(10);       // [10]
push(20);       // [10, 20]
push(30);       // [10, 20, 30]
console.log('Stack--->', data);


function pop() {
    if (!data.length) return 'Stack is empty';

    const value = data[data.length - 1]
    data.length = data.length - 1;
    return value;
}

const removed = pop();
console.log('removed--->', removed);  // 30
console.log('Stack--->', data);                     // [10, 20]
