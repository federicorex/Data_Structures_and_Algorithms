let arr1 = ["a","b","c","d","a"];

let findDuplicateV1 = (arr) => {
    let hashMap = {};

    arr.forEach(element => {
        if(!hashMap[element]) {
            hashMap[element] = true;
        } else {
            hashMap[element] = false;
        }
    });

    for(let key in hashMap) {
        if(!hashMap[key]) {
            return key;
        }
    }

    return null;
}

let findDuplicateV2 = (arr) => {
    let hashMap = {};

    for(let key of arr) {
        if(hashMap[key]) {
            return key;
        } else {
            hashMap[key] = true;
        }
    }
}

console.log(findDuplicateV1(arr1));
console.log(findDuplicateV2(arr1));