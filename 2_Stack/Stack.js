// Stack
// LIFO - Last In First Out
// Time Complexity: O(1) for push and pop
// Space Complexity: O(n) overall (stack grows with elements)

let data = [];
const maxSize = 5;

function push(item) {
    if (data.length === maxSize) return 'Stack is full';
    data[data.length] = item;

    return data.length;
}

console.log('push--->', push(10));                      // 1
console.log('push--->', push(20));                      // 2
console.log('push--->', push(30));                      // 3
console.log('push--->', push(40));                      // 4
console.log('push--->', push(50));                      // 5
console.log('push--->', push(60));                      // Stack is full
console.log('Stack--->', data);                         // [10, 20, 30, 40, 50]


function pop() {
    if (!data.length) return 'Stack is empty';

    const value = data[data.length - 1]
    data.length = data.length - 1;
    return value;
}

console.log('pop--->',  pop());                         // 50
console.log('Stack--->', data);                         // [10, 20, 30, 40]
