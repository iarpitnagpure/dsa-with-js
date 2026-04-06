// Insertion Sort
// Insertion Sort builds the sorted array one element at a time by inserting each element into its correct position.

// Algorithm (Step-by-Step)
// Start from the second element of the array (index 1)
// Store the current element in a variable (current)
// Compare it with the elements before it
// Shift all elements that are greater than current one position to the right
// Insert the current element at its correct position
// Move to the next element
// Repeat until the entire array is sorted

// Time Complexity:
//      Best Case:      O(n)      -> When array is already sorted
//      Average Case:   O(n²)   
//      Worst Case:     O(n²)    

// Space Complexity: O(1)

const array = [90, 40, 10, 30, 10, 20];

function sort(data) {
    let i, j, current;
    for (i = 1; i < data.length; i++) {
        current = data[i];
        j = i - 1;
        while (j >= 0 && current < data[j]) {
            data[j+1] = data[j];
            j--;
        }
        data[j+1] =  current;
    }
    return data;
}

const sortedArray = sort(array);
console.log('sortedArray--->', sortedArray);    // [ 10, 10, 20, 30, 40, 90 ]