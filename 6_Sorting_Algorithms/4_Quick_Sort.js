// Quick Sort
// Quick Sort recursively partitions the array around a pivot and sorts the subarrays to achieve efficient sorting.

// Algorithm (Step-by-Step)
// Select a pivot element from the array
// Partition the array into two parts:
// Elements less than pivot
// Elements greater than or equal to pivot
// Recursively apply Quick Sort to the left subarray
// Recursively apply Quick Sort to the right subarray
// Combine the results:
// Sorted left + pivot + sorted right
// Repeat until the subarrays contain only one element or are empty

// Time Complexity:
//      Best Case:      O(nlogn)     
//      Average Case:   O(nlogn)     
//      Worst Case:     O(n²)     

// Space Complexity: O(n)

const array = [90, 40, 10, 30, 10, 20];

function sort(data) {
    if (data.length <= 1) return data;

    const left = [];
    const right = [];
    const pivot = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] < pivot) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)];
}

const sortedArray = sort(array);
console.log('sortedArray--->', sortedArray);    // [ 10, 10, 20, 30, 40, 90 ]