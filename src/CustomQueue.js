export class CustomQueue {
    constructor() {
        let data = [];
        this.data = data;
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        return this.data.shift();
    }

    read() {
        if(this.data.length > 0) {
            return this.data[0];
        } else {
            return null;
        }
    }
}

// let queue1 = new CustomQueue();
// queue1.enqueue(2);
// queue1.enqueue(45);
// queue1.enqueue(66);
// queue1.enqueue(100);
// console.log(queue1.read());
// queue1.dequeue();
// console.log(queue1.read());
// queue1.dequeue();
// console.log(queue1.read());
// queue1.dequeue();
// console.log(queue1.read());
// queue1.dequeue();
// console.log(queue1.read());