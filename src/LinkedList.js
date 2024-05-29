import { CustomNode } from "./CustomNode.js";

export class LinkedList {
    constructor(firstNode) {
        this.firstNode = firstNode;
    }

    reading(index) {
        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < index) {
            if (!currentNode) {
                return null;
            }

            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return currentNode ? currentNode.data : null;
    }

    searching(value) {
        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentNode) {
            if (value === currentNode.data) {
                return currentIndex;
            }

            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return null;
    }

    insertion(index, data) {
        let newNode = new CustomNode(data);

        if (index === 0) {
            newNode.nextNode = this.firstNode;
            this.firstNode = newNode;
            return;
        }

        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < (index - 1)) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
    }

    deletion(index) {
        if (index === 0) {
            this.firstNode = this.firstNode.nextNode;
            return;
        }

        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < (index - 1)) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        currentNode.nextNode = currentNode.nextNode.nextNode;
    }

    printAllElements() {
        let currentNode = this.firstNode;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.nextNode;
        }
    }

    returnLastElement() {
        let currentNode = this.firstNode;

        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }

        return currentNode.data;
    }

    reverseList() {
        let previousNode = null;
        let currentNode = this.firstNode;
        
        while(currentNode) {
            let nextNode = currentNode.nextNode;
            currentNode.nextNode = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.firstNode = previousNode;

    }

}
