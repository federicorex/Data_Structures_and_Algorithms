export class CustomHeap {
    data;
    constructor() {
        this.data = [];
    }

    rootNode() {
        return this.data[0];
    }

    lastNode() {
        return this.data[this.data.length - 1];
    }

    leftChildIndex(index) {
        return (index * 2) + 1;
    }

    rightChildIndex(index) {
        return (index * 2) + 2;
    }

    parentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    insert(value) {
        this.data.push(value);

        let newNodeIndex = this.data.length - 1;

        let temp = null;

        while(newNodeIndex > 0 && this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]) {
            temp = this.data[this.parentIndex(newNodeIndex)];
            this.data[this.parentIndex(newNodeIndex)] = this.data[newNodeIndex];
            this.data[newNodeIndex] = temp;
            
            newNodeIndex = this.parentIndex(newNodeIndex);
        }
    }

    delete() {
        this.data.rootNode() = this.data.pop();

        let trickleNodeIndex = 0;

        let temp = null;

        while(this.hasGreaterChild(trickleNodeIndex)) {
            let largeChildIndex = this.calculateLargerChildIndex(trickleNodeIndex);

            temp = this.data[trickleNodeIndex];
            this.data[trickleNodeIndex] = this.data[largeChildIndex];
            this.data[largeChildIndex] = temp;

            trickleNodeIndex = largeChildIndex;
        }
    }

    hasGreaterChild(index) {
        return (this.data[this.leftChildIndex(index)] && this.data[this.leftChildIndex(index)] > this.data[index] ||
    this.data[this.rightChildIndex] && this.data[this.rightChildIndex(index)] > this.data[index]);
    }

    calculateLargerChildIndex(index) {
        if(!this.data[this.rightChildIndex(index)]) {
            return this.leftChildIndex(index);
        }

        if(this.data[this.rightChildIndex(index)] > this.data[this.leftChildIndex(index)]) {
            return this.rightChildIndex(index);
        } else {
            return this.leftChildIndex(index);
        }
    }
}