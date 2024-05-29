let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [1,10,4];

let twoArrayIntersectionV1 = (arr1, arr2) => {
    let bigArray = [];
    let smallArray = [];
    let hashMap2 = {};
    let arr3 = [];
    let index = 0;

    if(arr1.length > arr2.length) {
        bigArray = arr1;
        smallArray = arr2;
    } else {
        bigArray = arr2;
        smallArray = arr1;
    }

    smallArray.forEach(element => {
        hashMap2[element] = true;
    });

    bigArray.forEach(element => {
        if(hashMap2[element]) {
            arr3[index] = element;
            index++;
        }
    });

    return arr3;
}

let twoArrayIntersectionV2 = (arr1, arr2) => {
    let intersection = [];
    let hashMap = {};
    let index = 0;
    
    arr1.forEach(element => {
        hashMap[element] = true;
    });
    
    for(let key of arr2) {
        if(hashMap[key] !== arr2[key]) {
            intersection[index] = key;
            index++;
        }
    }

    return intersection;
}

console.log(twoArrayIntersectionV1(array1, array2));
console.log(twoArrayIntersectionV2(array1, array2));