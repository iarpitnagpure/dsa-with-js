// Binary Search Tree

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
        if (!root) return [];

        result.push(root.data);
        this.preOrder(root.left, result);
        this.preOrder(root.right, result);

        return result;
    }

    inOrder(root = this.root, result = []) {
        if (!root) return [];

        this.inOrder(root.left, result);
        result.push(root.data);
        this.inOrder(root.right, result);

        return result;
    }

    postOrder(root = this.root, result = []) {
        if (!root) return [];

        this.postOrder(root.left, result);
        this.postOrder(root.right, result);
        result.push(root.data);

        return result;
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