import { SortableArray } from "./PartionAndQuicksort.js";

let arr1 = [1,100,1,100];
let arr2 = new SortableArray([0,5,2,1,6,3]);
let arr3 = new SortableArray([1,100,5,0,2]);

let addUntil100V1 = (arr, count = 0) => {    
    
    if(arr.length === 0) {
        // count++;
        // console.log(count);
        return 0;
    }

    // console.log("Chiamata alla funzione");
    
    let addUntil100V1Var = addUntil100V1(arr.slice(1, arr.length));
    
    if (arr[0] + addUntil100V1Var > 100) {
        return addUntil100V1Var;
    } else {
        return arr[0] + addUntil100V1Var;
    }
}

let addUntil100V2 = (arr) => {
    if(arr.length === 0) {
        // count++;
        // console.log(count);
        return 0;
    }

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] + arr[i + 1] > 100) {
            continue;
        } else {
            return arr[i] + arr[i + 1];
        }
    }

    return 0;
}

let golombSeq = (num, memo = {}) => {
    // console.log("Chiamata alla funzione");
    if(num === 1) {
        return 1;
    }

    if(!memo[num]) {
        return 1 + golombSeq(num - golombSeq(golombSeq(num - 1)));
    }

    return memo[num];
}

let uniquePath = (rows, columns, memo = {}) => {
    if(rows === 1 || columns === 1) {
        return 1;
    }

    if(!memo[rows, columns]) {
        return uniquePath(rows - 1, columns) + uniquePath(rows, columns - 1);
    }

    // let rowsMinusOne = uniquePath(rows - 1, columns);
    // let columnsMinusOne = uniquePath(rows, columns - 1);

    return memo[rows, columns];
}

// console.log(addUntil100V1(arr1));
// console.log(addUntil100V2(arr1));
// console.log(golombSeq(6));
// console.log(uniquePath(6,5));

console.log(arr2.partition(0, arr2.length - 1));
console.log(arr2.quicksort(0, arr2.length - 1));
console.log(arr2.array);