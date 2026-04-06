// Selection Sort
// Selection Sort repeatedly selects the smallest element from the unsorted portion and places it at its correct position.

// Algorithm (Step-by-Step)
// Start from the first index of the array
// Assume the current index as the minimum element
// Traverse the remaining unsorted array to find the actual minimum
// Update the index of the minimum element if a smaller element is found
// Swap the minimum element with the current index
// Move to the next index
// Repeat the process until the entire array is sorted

// Time Complexity:
//      Best Case:      O(n²)      
//      Average Case:   O(n²)   
//      Worst Case:     O(n²)    

// Space Complexity: O(1)

const array = [90, 40, 10, 30, 10, 20];

function sort(data) {
    for (let i = 0; i < data.length; i++) {
        let min = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[min] > data[j]) {
                min = j;
            }
        }
        const temp = data[min];
        data[min] = data[i];
        data[i] = temp;
    }
    return data;
}

const sortedArray = sort(array);
console.log('sortedArray--->', sortedArray);    // [ 10, 10, 20, 30, 40, 90 ]