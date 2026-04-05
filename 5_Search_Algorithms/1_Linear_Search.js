// Linear Search
// Linear Search is the simplest searching algorithm where you check each element one by one until you find
// Time Complexity:
//      Best Case: O(1)        -> Element found at the first position
//      Average Case: O(n)     -> Element found somewhere in the middle
//      Worst Case: O(n)       -> Element found at the end or not found at all
// Space Complexity: O(1) 

const data = [1, 2, 3, 4, 5, 6];

function searchByIndex(value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log('Linear search--->', searchByIndex(1));            // 0
console.log('Linear search--->', searchByIndex(3));            // 2
console.log('Linear search--->', searchByIndex(5));            // 4
console.log('Linear search--->', searchByIndex(10));           // -1
