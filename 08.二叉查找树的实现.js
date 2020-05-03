/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-03 20:23:38
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-03 21:00:05
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.node = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.node === null) {
            this.node = newNode;
        } else {
            this.insertNode(this.node, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete(value) {
        this.deleteNode(value, this.node);
    }

    deleteNode(aimNode, node) {
        if (node === null) {
            return node;
        };
        if (aimNode < node.value) {
            node = this.deleteNode(aimNode, node.left);
            return node;
        } else if (aimNode > node.value) {
            node = this.deleteNode(aimNode, node.right);
            return node;
        } else if (aimNode === node.value && node.left === null && node.right === null) {
            node = null;
            return node;
        } else if (aimNode === node.value && node.left !== null && node.right === null) {
            node = node.left;
            return node;
        } else if (aimNode === node.value && node.left === null && node.right !== null) {
            node = node.right;
            return node;
        } else if (aimNode === node.value && node.left !== null && node.right !== null) {
            let aux = this.findMinNode(node.right);
            node.value = aux;
            node.right = this.deleteNode(aux, node.right);
            return node
        } else {
            return 1
        };
    }

    findMinNode(root) {
        let minNode = null;
        while (root !== null) {
            root = root.left;
            minNode = root.value;
        }

        return minNode;
    }
}