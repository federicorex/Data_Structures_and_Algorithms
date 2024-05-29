import { Stack } from "./Stack.js";

let string1 = "World";

let reverseStringWithStack = (string) => {
    let string2 = "";
    let stack1 = new Stack();
    for(let i = 0; i < string.length; i++) {
        stack1.stackPush(string[i]);
    }

    while(stack1.stackGet() !== null) {
        string2 += stack1.stackPop();
    }

    return string2;
}

console.log(reverseStringWithStack(string1));