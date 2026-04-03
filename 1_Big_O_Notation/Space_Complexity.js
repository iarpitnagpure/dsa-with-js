// Space complexity in JavaScript (or any programming language) refers to how much memory an algorithm uses as the input size grows.

// Space complexity measures:
  // Memory used by variables
  // Data structures (arrays, objects, etc.)
  // Function calls (call stack)

// It answers: “How much extra space does my code need?”

// Types of Space Usage

// 1. Input Space
// Memory used to store the input itself
// 👉 Usually not counted in space complexity

// 2. Auxiliary Space
// Extra memory used by your algorithm
// 👉 This is what we focus on


// Space Complexity

//  O(1) — Constant Space
const funnyNumber = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};
// Memory stays the same, no matter input size.


// O(n) — Linear Space
function copyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
// New array of size n → O(n)

// O(n²) — Quadratic Space
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}
// Creates n × n matrix → O(n²)

// O(log n) — Logarithmic Space (Recursion)
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
}
// Each recursive call adds stack space → O(log n)



// ⚠️ Important Concepts
// 1. Variables vs Data Structures
let x = 10; // O(1)
let arr = new Array(n); // O(n)

// 2. In-place Operations (Better Space)
function reverse(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
// No extra array → O(1)


// 🧩 Quick Summary
// Complexity	Meaning
// O(1)	Fixed memory
// O(n)	Grows linearly
// O(n²)	Grows very fast
// O(log n)	Grows slowly (recursion)