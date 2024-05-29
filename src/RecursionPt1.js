let arr1 = [1,2,3,
                [4,5,6],
                7,
                [8,
                    [9,10,11,
                        [12,13,14]
                    ]
                ],
                [15,16,17,18,19,
                    [20,21,22,
                        [23,24,25,
                            [26,27,29]
                        ],30,31
                    ],32
                ],33
            ];

let arr2 = ["ab","c","def","ghij","klmnopqr","stuv","wxyz"];

let arr3 = [1,2,3,4,5,6,8,10,12];

let string1 = "blablax";

let countdown = (num) => {
    console.log(num);
    if(num === 0){
        return;
    }
    countdown(num - 1);
}

// let factorialCalculator = (num) => {
//     if(num === 1) {
//         return 1;
//     }
//     return num * factorialCalculator(num - 1);
// }

// let sumOfAllNums = (low, high) => {
//     if (high === Math.ceil((low + high) / 2)) {
//         return low + high;
//     }
//     return low + high + sumOfAllNums(low + 1, high - 1);
// }

// let printOnlyNums = (arr, index = 0) => {
//     if(index < arr.length){
//         if(!isNaN(arr[index])) {
//             console.log(arr[index]);
//         }
//     } else {
//         return;
//     }

//     printOnlyNums(arr, index + 1);
// }

let totalNumOfChars = (arr, index = 0, count = 0) => {
    if(index > arr.length - 1){
        return 0;
    }
    count = arr[index].length;
    
    return count + totalNumOfChars(arr, index + 1);
}

let onlyEvenNums = (arr, index1 = 0, index2 = 0, evenArr = []) => {
    if(index1 > arr.length - 1){
        return evenArr;
    }
    if(arr[index1] % 2 == 0) {
            evenArr[index2] = arr[index1];

            return onlyEvenNums(arr, index1 + 1, index2 + 1, evenArr);
    } else {
        return onlyEvenNums(arr, index1 + 1, index2, evenArr);
    }

}

let triangularNums = (num) => {
    if(num === 1) {
        return 1;
    }

    return num + triangularNums(num - 1); 
}

let findTheFirstX = (string, index = 0) => {
    if(index === string.length - 1 && (string[index] !== 'X' && string[index] !== 'x')) {
        return "No X/x found";
    }
    if(string[index] === 'X' || string[index] === 'x') {
        return `First X/x at index ${index}`;
    } else {
        return findTheFirstX(string, index + 1);
    }
}

let uniquePaths = (rows, columns) => {
    if(rows === 1 || columns === 1) {
        return 1;
    }
    return uniquePaths(rows, columns - 1) + uniquePaths(rows - 1, columns);
}

// countdown(10);
// console.log(factorialCalculator(5));
// console.log(sumOfAllNums(1, 100));
// printOnlyNums(arr1);

console.log(totalNumOfChars(arr2));
console.log(onlyEvenNums(arr3));
console.log(triangularNums(7));
console.log(findTheFirstX(string1));
console.log(uniquePaths(4,4));