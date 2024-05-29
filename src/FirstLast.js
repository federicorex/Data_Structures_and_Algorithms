let firstLastSearch = (arr) => {
    let newArr = [];
    if(arr.length % 2 === 0) {
        for(let i = 0; i < arr.length; i+= 2) {
            newArr[i] = arr[Math.floor(i / 2)];
            newArr[i + 1] = arr[arr.length - 1 - i / 2];
        }
    } else {
        for(let i = 0; i < arr.length; i+= 2) {
            if(i === arr.length - 1) {
                newArr[i] = arr[Math.floor(i / 2)];
                break;
            }
            newArr[i] = arr[Math.floor(i / 2)];
            newArr[i + 1] = arr[arr.length - 1 - i / 2];
        }
    }
    return newArr;
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [1,2,3,4,5,6,7,8,9,10,11];

console.log(firstLastSearch(arr1));
console.log(firstLastSearch(arr2));