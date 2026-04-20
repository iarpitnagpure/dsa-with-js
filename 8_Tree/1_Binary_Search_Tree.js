// Binary Search Tree
// A Binary Search Tree (BST) is a special type of binary tree where:
// For every node:
// Left subtree values < Node value < Right subtree values
//     10
//    /  \
//   5    15
//  / \   / \
// 3   7 12 18

// Time Complexity
// | Operation               | Best Case | Average Case | Worst Case |
// | ----------------------- | --------- | ------------ | ---------- |
// | Append                  | O(1)      | O(log n)     | O(n)       |
// | Search                  | O(1)      | O(log n)     | O(n)       |
// | Delete                  | O(1)      | O(log n)     | O(n)       |
// | Traversal (DFS/BFS)     | O(n)      | O(n)         | O(n)       |
// | Min / Max               | O(1)      | O(log n)     | O(n)       |

// Space Complexity
// | Aspect                    | Space Complexity |
// | ------------------------- | ---------------- |
// | Tree Storage (nodes)      | O(n)             | (n - Nodes of tree)
// | Recursive Stack (DFS)     | O(h)             | (h - height of tree)
// | Queue (BFS)               | O(w)             | (w - Width of tree)


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;

            return;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(data) {
        return this.searchValue(this.root, data);
    }

    searchValue(root, data) {
        if (!root) return false;

        if (root.data === data) return true;

        return root.data > data
            ? this.searchValue(root.left, data)
            : this.searchValue(root.right, data);
    }

    preOrder(root = this.root, result = []) {
        if (!root) return result;

        result.push(root.data);
        this.preOrder(root.left, result);
        this.preOrder(root.right, result);

        return result;
    }

    inOrder(root = this.root, result = []) {
        if (!root) return result;

        this.inOrder(root.left, result);
        result.push(root.data);
        this.inOrder(root.right, result);

        return result;
    }

    postOrder(root = this.root, result = []) {
        if (!root) return result;

        this.postOrder(root.left, result);
        this.postOrder(root.right, result);
        result.push(root.data);

        return result;
    }

    bfSearch() {
        if (!this.root) return [];

        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.data);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return result;
    }

    minValue(root = this.root) {
        if (!root) return null;

        if (root.left) {
            return this.minValue(root.left);
        } else {
            return root.data;
        }
    }

    maxValue(root = this.root) {
        if (!root) return null;

        if (root.right) {
            return this.maxValue(root.right);
        } else {
            return root.data;
        }
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(root, data) {
        if (!root) return null;

        if (root.data > data) {
            root.left = this.deleteNode(root.left, data);
        } else if (root.data < data) {
            root.right = this.deleteNode(root.right, data);
        } else {
            if (!root.left && !root.right) return null;

            if (!root.left) return root.right;
            if (!root.right) return root.left;

            if (root.left && root.right) {
                const current = this.minValue(root.right);
                root.data = current;
                root.right = this.deleteNode(root.right, current)
            }
        }

        return root;
    }

    // DFS (Recursive)
    // Time Complexity: O(n)
    // Space Complexity: O(h) (height of tree)
    maxHeightDFS(root = this.root) {
        // If node is null → height = 0
        if (!root) return 0;

        // Recursively find height of left subtree
        const leftHeight = this.maxHeightDFS(root.left);
        // Recursively find height of right subtree
        const rightHeight = this.maxHeightDFS(root.right);

        // Return max height + 1 (for current node)
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Alternate way
    // BFS (Level Order)
    // Time Complexity: O(n)
    // Space Complexity: O(w) (width of tree)
    maxHeightBFS(root = this.root) {
        // If tree is empty → height = 0
        if (!root) return 0;

        const queue = [root];
        let depth = 0;

        // Traverse level by level
        while (queue.length > 0) {
            let size = queue.length; // number of nodes in current level

            // Process all nodes in current level
            for (let i = 0; i < size; i++) {
                const current = queue.shift();

                // Add children to queue for next level
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }

            // After finishing one level → increase depth
            depth++;
        }

        return depth;
    }
}

// Tree creation
const bsTree = new BST();

// Append node in tree
bsTree.append(10);
bsTree.append(8);
bsTree.append(9);
bsTree.append(7);
bsTree.append(12);
bsTree.append(11);
bsTree.append(14);
bsTree.append(20);
//     10
//    /  \
//   8    12
//  / \   / \
// 7   9 11 14
//            \
//             20


// Search Node
console.log('7 exist', bsTree.search(7));                           // true
console.log('20 exist', bsTree.search(20));                         // true
console.log('21 exist', bsTree.search(21));                         // false


// Depth First Search
console.log('PreOrder', bsTree.preOrder());                         // [10, 8, 7, 9, 12, 11, 14, 20]
console.log('InOrder', bsTree.inOrder());                           // [7, 8, 9, 10, 11, 12, 14, 20]
console.log('PostOrder', bsTree.postOrder());                       // [7, 9, 8, 11, 20, 14, 12, 10]

// Breadth First Search
console.log('BFS', bsTree.bfSearch());                              // [10, 8, 12, 7, 9, 11, 14, 20]


// MIN & MAX VALUE
console.log('MIN', bsTree.minValue());                              // 7
console.log('MAX', bsTree.maxValue());                              // 20


// Delete Node
bsTree.delete(20);
//     10
//    /  \
//   8    12
//  / \   / \
// 7   9 11 14
bsTree.delete(10);
//     11
//    /  \
//   8    12
//  / \     \
// 7   9     14


// Max Height of tree
console.log(bsTree.maxHeightDFS());                                    // 3
console.log(bsTree.maxHeightBFS());                                    // 3
