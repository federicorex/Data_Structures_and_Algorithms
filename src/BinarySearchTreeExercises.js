import { CustomBinarySearchTreeNode, search, findGreatestValue, traverseAndPrintPreorder, traverseAndPrintPostorder } from "./CustomBinarySearchTree.js";

let customBinarySearchTreeNode5 = new CustomBinarySearchTreeNode(30);
let customBinarySearchTreeNode6 = new CustomBinarySearchTreeNode(85);
let customBinarySearchTreeNode3 = new CustomBinarySearchTreeNode(15);
let customBinarySearchTreeNode4 = new CustomBinarySearchTreeNode(35);
let customBinarySearchTreeNode1 = new CustomBinarySearchTreeNode(25, customBinarySearchTreeNode3, customBinarySearchTreeNode5);
let customBinarySearchTreeNode2 = new CustomBinarySearchTreeNode(75, customBinarySearchTreeNode4, customBinarySearchTreeNode6);
let customBinarySearchTreeNode0 = new CustomBinarySearchTreeNode(50, customBinarySearchTreeNode1, customBinarySearchTreeNode2);

console.log(findGreatestValue(customBinarySearchTreeNode0) + "\n");
traverseAndPrintPreorder(customBinarySearchTreeNode0);
console.log("\n");
traverseAndPrintPostorder(customBinarySearchTreeNode0);