// Time complexity is a way to measure how fast an algorithm runs as the input size grows.
// In simple terms:
// “How does the number of operations increase when input gets bigger?”

// Time Complexity

// O(1) — Constant Time
function getFirst(arr) {
  return arr[0];
}
// Runs in the same time, no matter input size. 
// Always 1 operation

// O(n) — Linear Time
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// Runs once for each element. 
// If array grows → time grows

// O(n²) — Quadratic Time
function pairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// Nested loops → much slower
// For n elements → n × n operations

// O(log n) — Logarithmic Time
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // not found
};
// Very fast for large data


// Additional question1: 
for (let i = 0; i < log(n); i++) {
  // some constant work
}
// Answer: O(log n)


// Additional question2: 
for (let i = 0; i < n; i++) {
  // some constant work
}
for (let i = 0; i < n; i++) {
  // some constant work
}
// Answer: O(2n)
//Explanation: O(n)+O(n)=O(2n)


// Additional question3: 
for (let i = 0; i < log(n); i++) {
  // some constant work
}
for (let i = 0; i < n; i++) {
  // some constant work
}
// Answer: O(n)
//Explanation: O(logn)+O(n) = O(n)
// In Big-O, we keep the dominant term
// O(n) grows much faster than O(log n)