// Bubble Sort
// Bubble Sort repeatedly compares adjacent elements and swaps them to gradually move larger elements to the end of the array.

// Algorithm (Step-by-Step)
// Start from the first element of the array
// Compare the current element with the next element
// Swap them if they are in the wrong order
// Move one step forward
// Continue this process until the end of the array
// After each pass, the largest element moves to its correct position
// Repeat the process for the remaining unsorted portion
// Stop when no swaps are needed (optimized version)

// Time Complexity:
//      Best Case:      O(n)      -> Only with optimization (early exit)
//      Average Case:   O(n²)   
//      Worst Case:     O(n²) 

// Space Complexity: O(1)

const array = [90, 40, 10, 30, 10, 20];

function sort(data) {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - 1; j++) {
            if (data[j] > data[j + 1]) {
                const temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}

const sortedArray = sort(array);
console.log('sortedArray--->', sortedArray);    // [ 10, 10, 20, 30, 40, 90 ]

// Optimized Version for O(n) Best case time complexity
// function sort(data) {
//     for (let i = 0; i < data.length - 1; i++) {
//         let swapped = false;

//         for (let j = 0; j < data.length - 1 - i; j++) {
//             if (data[j] > data[j + 1]) {
//                 const temp = data[j];
//                 data[j] = data[j + 1];
//                 data[j + 1] = temp;
//                 swapped = true;
//             }
//         }

//         if (!swapped) break;
//     }
//     return data;
// }