export class CustomBinarySearchTreeNode {
    value;
    leftChild;
    rightChild;
    
    constructor(value, leftChild = null, rightChild = null) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

export let search = (searchValue, node) => {
    if (node === null || node.value === searchValue) {
        return node;
    } else if(searchValue < node.value) {
        return search(searchValue, node.leftChild);
    } else {
        return search(searchValue, node.rightChild);
    }
}

export let findGreatestValue = (node) => {
    if(node === null) {
        return;
    } else if(node.rightChild === null) {
        return node.value;
    } else {
        return findGreatestValue(node.rightChild);
    }
}

export let traverseAndPrintPreorder = (node) => {
    if(node === null) {
        return;
    }
    console.log(node.value);
    traverseAndPrintPreorder(node.leftChild);
    traverseAndPrintPreorder(node.rightChild);
}

export let traverseAndPrintPostorder = (node) => {
    if(node === null) {
        return;
    }
    traverseAndPrintPostorder(node.leftChild);
    traverseAndPrintPostorder(node.rightChild);
    console.log(node.value);
}