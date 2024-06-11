export class CustomStack {
    constructor() {
        let data = [];
        this.data = data;
    }

    stackPush(element) {
        this.data.push(element);
    }

    stackPop() {
        return this.data.pop();
    }

    stackGet() {
        if(this.data.length > 0) {
            return this.data[this.data.length - 1];
        } else {
            return null;
        }
    }
}

// let stack1 = new Stack();
// stack1.stackPush(1);
// stack1.stackPush(4);
// stack1.stackPush(55);
// stack1.stackPush(105);
// console.log(stack1.stackGet());
// stack1.stackPop();
// console.log(stack1.stackGet());
// stack1.stackPop();
// console.log(stack1.stackGet());
// stack1.stackPop();
// console.log(stack1.stackGet());
// stack1.stackPop();
// console.log(stack1.stackGet());