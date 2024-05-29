export class SortableArray {
    constructor(array = []) {
        this.array = array;
        this.length = array.length;
    }
    
    partition = (leftPointer, rightPointer) => {
        let pivotIndex = rightPointer;
    
        let pivot = this.array[pivotIndex];

        rightPointer--;

        let temp = null;

        while(true) {
            while(this.array[leftPointer] < pivot) {
                leftPointer++;
            }

            while(this.array[rightPointer] > pivot) {
                rightPointer--;
            }

            if(leftPointer >= rightPointer) {
                break;
            } else {
                temp = this.array[leftPointer];
                this.array[leftPointer] = this.array[rightPointer];
                this.array[rightPointer] = temp;
                leftPointer++;
            }
        }

        temp = this.array[leftPointer];
        this.array[leftPointer] = this.array[pivotIndex];
        this.array[pivotIndex] = temp;
        
        return leftPointer;
    }

    quicksort = (leftPointer, rightPointer) => {
        if(rightPointer - leftPointer <= 0) {
            return null;
        }

        let pivotIndex = this.partition(leftPointer, rightPointer);

        this.quicksort(leftPointer, pivotIndex - 1);
        this.quicksort(pivotIndex + 1, rightPointer);
    }

}
