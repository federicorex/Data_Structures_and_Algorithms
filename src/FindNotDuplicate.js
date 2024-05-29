let string1 = "minimum";

let findNotDuplicate = (string) => {
    let stringArr = string.split("");
    let hashMap1 = {};
    let arr1 = [];
    let index = 0;

    stringArr.forEach(element => {
        if(hashMap1[element] === undefined) {
            hashMap1[element] = true;
        } else {
            hashMap1[element] = false;
        }
    });

    for(let key in hashMap1) {
        if(hashMap1[key] === true) {
            arr1[index] = key;
            index++;
        }
    }

    return arr1;
}

console.log(findNotDuplicate(string1));