// Merge Sort
// Merge Sort uses divide-and-conquer by splitting the array and merging sorted halves efficiently.

// Algorithm (Step-by-Step)
// Divide the array into two halves
// Recursively sort the left half
// Recursively sort the right half
// Merge the two sorted halves into one sorted array
// Repeat until the array is fully sorted

// Time Complexity:
// Best Case:    O(n log n)
// Average Case: O(n log n)
// Worst Case:   O(n log n)

// Space Complexity: O(n)

const array = [90, 40, 10, 30, 10, 20];

function sort(data) {
    if (data.length <= 1) return data;

    const mid = Math.floor(data.length / 2);
    const left = sort(data.slice(0, mid));
    const right = sort(data.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

const sortedArray = sort(array);
console.log('sortedArray--->', sortedArray); // [10, 10, 20, 30, 40, 90]