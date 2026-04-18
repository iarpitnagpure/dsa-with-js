# DSA with JavaScript

A comprehensive learning repository for **Data Structures and Algorithms** implemented in JavaScript. This repository covers fundamental concepts and algorithms essential for coding interviews and software development.

**Total Implementations:** 13 (6 Data Structures + 2 Search + 5 Sorting Algorithms)

## 📚 Table of Contents

- [Big O Notation](#big-o-notation)
- [Data Structures](#data-structures)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Circular Queue](#circular-queue)
  - [Singly Linked List](#singly-linked-list)
  - [Doubly Linked List](#doubly-linked-list)
  - [Binary Search Tree](#binary-search-tree)
- [Algorithms](#algorithms)
  - [Search Algorithms](#search-algorithms)
  - [Sorting Algorithms](#sorting-algorithms)

---

## 🚀 Big O Notation

Understanding time and space complexity is crucial for writing efficient code.

### Files
- **[Time_Complexity.js](1_Big_O_Notation/Time_Complexity.js)** - Analysis of algorithm time complexity
- **[Space_Complexity.js](1_Big_O_Notation/Space_Complexity.js)** - Analysis of algorithm space complexity

---

## 📦 Data Structures

### Stack

A **Last-In-First-Out (LIFO)** data structure where elements are added and removed from the same end (top).

**File:** [Stack.js](2_Stack/Stack.js)

**Methods Implemented:**
- `push(item)` - Add element to stack (O(1))
- `pop()` - Remove and return top element (O(1))

**Characteristics:**
- Fixed size with `maxSize = 5`
- Array-based implementation
- Checks for overflow when pushing and underflow when popping

**Complexity Analysis:**
- **Time:** Push O(1), Pop O(1)
- **Space:** O(n) overall

**Use Cases:** Undo/Redo, Browser history, Expression evaluation, Function call stack

---

### Queue

A **First-In-First-Out (FIFO)** data structure where elements are added at the rear and removed from the front.

**File:** [Queue.js](3_Queue/Queue.js)

**Methods Implemented:**
- `enqueue(item)` - Add element to queue end (O(1))
- `dequeue()` - Remove from front (O(n) with array shifting)
- `dequeue1()` - Optimized dequeue using front pointer (O(1))

**Characteristics:**
- Fixed size with `maxSize = 5`
- Two dequeue implementations:
  - Standard: O(n) - shifts all elements
  - Optimized: O(1) - uses front pointer without modifying queue

**Complexity Analysis:**
- **Time:** Enqueue O(1), Dequeue O(n) or O(1) (optimized)
- **Space:** O(n) overall

**Use Cases:** Task scheduling, BFS traversal, Printer queue, Message handling

---

### Circular Queue

An **optimized Queue** that wraps around, utilizing space more efficiently by connecting the last position to the first.

**File:** [Circular_Queue.js](4_Circular_Queue/Circular_Queue.js)

**Methods Implemented:**
- `enqueue(item)` - Add element with wrap-around using modulo (O(1))
- `dequeue()` - Remove element with wrap-around (O(1))

**Characteristics:**
- Uses front and rear pointers initialized to `-1`
- Wrap-around logic: `(rear + 1) % maxSize`
- Proper handling of single element case
- Eliminates wasted space from dequeue operations

**Complexity Analysis:**
- **Time:** Enqueue O(1), Dequeue O(1)
- **Space:** O(n)

**Use Cases:** CPU scheduling, Traffic light management, Round-robin algorithms

---

### Singly Linked List

A linear data structure where each node contains data and a pointer to the **next node only**.

**File:** [Singly_Linked_List.js](7_Linked_List/1_Singly_Linked_List.js)

**Methods Implemented:**
- `append(data)` - Add node at end (O(1) with tail reference)
- `insert(index, data)` - Insert node at index (O(n))
- `delete(index)` - Remove node at index with tail update (O(n))
- `search(data)` - Find node position (O(n))
- `print()` - Display list as `10 → 20 → 30 → null` (O(n))
- `reverse()` - Reverse entire list using 3-pointer technique (O(n))

**Characteristics:**
- Maintains both `head` and `tail` references for O(1) append
- Handles edge cases: empty list, head/tail deletion, reverse
- Uses pointer reversal algorithm for reverse operation

**Complexity Analysis:**
- **Time:** Append O(1), Insert/Delete/Search/Reverse O(n), Print O(n)
- **Space:** O(n) overall, O(1) per operation

**Use Cases:** Dynamic memory allocation, Music playlist, Browser history, Polynomial representation

---

### Doubly Linked List

A linear data structure where each node contains data and pointers to **both next and previous nodes**.

**File:** [Doubly_Linked_List.js](7_Linked_List/2_Doubly_Linked_List.js)

**Methods Implemented:**
- `append(data)` - Add node at end (O(1) with tail reference)
- `insert(index, data)` - Insert node at index (O(n))
- `delete(index)` - Remove node with proper pointer updates (O(n))
- `search(data)` - Find node position (O(n))
- `print()` - Display list as `10 ⇄ 20 ⇄ 30 ⇄ null` (O(n))

**Characteristics:**
- Maintains both `head` and `tail` references
- Bidirectional traversal capability
- Proper handling of prev/next pointers during insertion/deletion
- Better flexibility than singly linked list but uses more memory

**Complexity Analysis:**
- **Time:** Append O(1), Insert/Delete/Search O(n), Print O(n)
- **Space:** O(n) overall, O(1) per operation

**Use Cases:** Undo/Redo functionality, Browser back/forward, Music player with bidirectional navigation

---

### Binary Search Tree

A hierarchical data structure where each node has at most two children, maintaining the **BST property: Left < Parent < Right**.

**File:** [Binary_Search_Tree.js](8_Tree/1_Binary_Search_Tree.js)

**Methods Implemented:**
- `append(data)` - Insert node maintaining BST property (O(log n) average)
- `search(data)` - Find element in tree (O(log n) average)
- `delete(data)` - Remove node with 3 cases: leaf, one child, two children (O(log n) average)
- `preOrder()` - DFS: Root → Left → Right (O(n))
- `inOrder()` - DFS: Left → Root → Right - returns **sorted** (O(n))
- `postOrder()` - DFS: Left → Right → Root (O(n))
- `bfSearch()` - BFS level-order traversal (O(n))
- `minValue()` - Find minimum in tree (O(log n) average)
- `maxValue()` - Find maximum in tree (O(log n) average)

**Characteristics:**
- Node class with `data`, `left`, `right` pointers
- Recursive insertion maintaining BST ordering
- Multiple traversal methods: DFS (Pre/In/Post order) and BFS
- Sophisticated delete handling with min-value successor strategy
- InOrder traversal produces sorted array

**Complexity Analysis:**

| Operation | Best | Average | Worst |
|-----------|------|---------|-------|
| Append | O(1) | O(log n) | O(n) |
| Search | O(1) | O(log n) | O(n) |
| Delete | O(1) | O(log n) | O(n) |
| Traversal | O(n) | O(n) | O(n) |
| Min/Max | O(1) | O(log n) | O(n) |

**Space:**
- Storage: O(n)
- DFS Recursion stack: O(h) where h = height
- BFS Queue: O(w) where w = max width

**Use Cases:** Databases, File systems, Expression trees, AutoComplete, Spell checkers, Range queries

---

## 🔍 Algorithms

### Search Algorithms

#### Linear Search
**File:** [Linear_Search.js](5_Search_Algorithms/1_Linear_Search.js)

**Function:**
- `searchByIndex(value)` - Sequential element search

**How It Works:**
- Iterates through each element one by one
- Returns index on match, -1 if not found
- Works on any array (sorted or unsorted)

**Complexity:**
- **Time:** Best O(1), Average O(n), Worst O(n)
- **Space:** O(1)

---

#### Binary Search
**File:** [Binary_Search.js](5_Search_Algorithms/2_Binary_Search.js)

**Functions:**
- `searchByIndex(value)` - Iterative binary search
- `binarySearch(arr, value, start, end)` - Recursive binary search

**How It Works:**
- Divides search space in half each iteration
- Compares middle element with target
- Requires **sorted data**
- Two implementations: iterative and recursive
- Returns index on match, -1 if not found

**Complexity:**
- **Time:** Best O(1), Average O(log n), Worst O(log n)
- **Space:** O(1) iterative, O(log n) recursive

---

### Sorting Algorithms

#### 1. Bubble Sort
**File:** [Bubble_Sort.js](6_Sorting_Algorithms/1_Bubble_Sort.js)

**How It Works:**
- Compares adjacent elements and swaps if out of order
- Multiple passes until array is sorted
- Optimized version available with early exit swap flag

**Complexity:**
- **Time:** Best O(n), Average O(n²), Worst O(n²)
- **Space:** O(1)

**Best For:** Learning, nearly sorted arrays (with optimization)

---

#### 2. Selection Sort
**File:** [Selection_Sort.js](6_Sorting_Algorithms/2_Selection_Sort.js)

**How It Works:**
- Finds minimum element from unsorted portion
- Swaps with current position
- Builds sorted array from left to right

**Complexity:**
- **Time:** Best O(n²), Average O(n²), Worst O(n²)
- **Space:** O(1)

**Best For:** Learning, small arrays, when memory is critical

---

#### 3. Insertion Sort
**File:** [Insertion_Sort.js](6_Sorting_Algorithms/3_Insertion_Sort.js)

**How It Works:**
- Builds sorted array by inserting elements one at a time
- Shifts elements greater than current to the right
- Similar to sorting playing cards in hand

**Complexity:**
- **Time:** Best O(n), Average O(n²), Worst O(n²)
- **Space:** O(1)

**Best For:** Small arrays, nearly sorted arrays, online sorting

---

#### 4. Quick Sort
**File:** [Quick_Sort.js](6_Sorting_Algorithms/4_Quick_Sort.js)

**How It Works:**
- Divide-and-conquer using pivot element
- Partitions into left (< pivot) and right (≥ pivot)
- Recursively sorts subarrays
- Uses first element as pivot
- Returns combined result: `[...sort(left), pivot, ...sort(right)]`

**Complexity:**
- **Time:** Best O(n log n), Average O(n log n), Worst O(n²)
- **Space:** O(n)

**Best For:** Large arrays, general-purpose sorting

---

#### 5. Merge Sort
**File:** [Merge_Sort.js](6_Sorting_Algorithms/5_Merge_Sort.js)

**Functions:**
- `sort(data)` - Divide-and-conquer merge sort
- `merge(left, right)` - Merges two sorted arrays

**How It Works:**
- Recursively divides array into halves
- Merges sorted halves back together
- Compares elements from both arrays during merge

**Complexity:**
- **Time:** Best O(n log n), Average O(n log n), Worst O(n log n)
- **Space:** O(n)

**Best For:** Large arrays, stable sorting needed, consistent performance required

---

## 📊 Sorting Algorithm Comparison

| Algorithm | Best | Average | Worst | Space | Stable | In-Place |
|-----------|------|---------|-------|-------|--------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ | ✅ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ | ❌ |

---

## 🛠️ Getting Started

1. Clone or download this repository
2. Navigate to any `.js` file to view the implementation
3. Run files using Node.js:
   ```bash
   node path/to/file.js
   ```

---

## 📖 Learning Path

**Recommended order for learning:**

1. **Big O Notation** - Understand complexity analysis
2. **Stack & Queue** - Basic data structure fundamentals
3. **Circular Queue** - Optimization techniques
4. **Linked Lists** (Singly → Doubly) - Dynamic data structures
5. **Search Algorithms** (Linear → Binary) - Progressively efficient searching
6. **Sorting Algorithms** (Bubble → Merge) - Simple to advanced
7. **Binary Search Tree** - Hierarchical data structures and tree traversals
8. **Review & Optimize** - Revisit and optimize based on complexity

---

## 💡 Tips for Learning

- ✅ Understand the **why** behind each algorithm, not just the code
- ✅ Trace through examples manually to solidify understanding
- ✅ Practice implementing from scratch without looking at solutions
- ✅ Analyze time and space complexity for each algorithm
- ✅ Try to optimize solutions incrementally
- ✅ Identify use cases for each data structure
- ✅ Compare implementations to understand trade-offs

---

## 📝 Implementation Notes

- All implementations include detailed comments explaining the algorithm
- Each data structure and algorithm includes complexity analysis
- Code examples with expected outputs are provided
- Edge cases are properly handled (empty structures, single elements, etc.)
- Both recursive and iterative solutions are provided where applicable

---

## 🎯 Future Enhancements

- [ ] Add advanced data structures (Hash Tables, Heaps, Graphs)
- [ ] Add graph algorithms (DFS, BFS, Dijkstra's, Bellman-Ford)
- [ ] Add dynamic programming examples
- [ ] Add test cases and unit tests for each implementation
- [ ] Add visualization helpers for tree and graph structures
- [ ] Add more tree types (AVL, Red-Black, Segment Trees)

---

**Happy Learning! 🚀**