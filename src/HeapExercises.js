import { CustomHeap } from "./CustomHeap.js";

let arr1 = [2,3,46,6,71,61,7,76,10];
let customHeap1 = new CustomHeap();

arr1.forEach(element => {
    customHeap1.insert(element);
});

console.log(customHeap1.rootNode());
console.log(customHeap1.lastNode());

