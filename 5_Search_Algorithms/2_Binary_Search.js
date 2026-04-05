// Binary Search
// Binary Search is a fast searching algorithm used to find an element in a sorted array by repeatedly dividing the search space into half.
// Note: Binary search only works on sorted data
// Time Complexity:
//      Best Case: O(1)             -> Element found at the first position
//      Average Case: O(logn)       -> Element found somewhere in the middle
//      Worst Case: O(logn)         -> Element found at the end or not found at all
// Space Complexity: O(1) 

const data = [1, 2, 3, 4, 5, 6];

function searchByIndex(value) {
    let start = 0;
    let end = data.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (data[mid] === value) return mid;

        if (data[mid] < value) {
            start = mid + 1
        } else {
            end = mid -1
        }
    }

    return -1;
}

console.log('Binary search--->', searchByIndex(1));            // 0
console.log('Binary search--->', searchByIndex(3));            // 2
console.log('Binary search--->', searchByIndex(5));            // 4
console.log('Binary search--->', searchByIndex(10));           // -1

// Binary Seach with recursion
// Time Complextiy will be same 
// Space Complexuty will be O(log n)
function binarySearch(arr, value, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) return mid;

    if (arr[mid] < value) {
        return binarySearch(arr, value, mid + 1, end);
    }

    return binarySearch(arr, value, start, mid - 1);
}

console.log('Binary search with Recursion--->', searchByIndex(5));            // 4
console.log('Binary search with Recursion--->', searchByIndex(10));           // -1
