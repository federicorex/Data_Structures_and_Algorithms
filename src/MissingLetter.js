let string1 = "dgnakagnknngaerignrigbaorgbrbgragbagboeraibgragb";

let missingLetter = (string) => {
    let arr = "abcdefghijklmnopqrstuvwxyz".split("");
    let stringArr = string.split("");
    let hashMap1 = {};
    let arr2 = [];
    let index = 0;

    stringArr.forEach(element => {
        hashMap1[element] = true;
    });

    for(let key of arr) {
        if(hashMap1[key] !== true) {
            arr2[index] = key;
            index++;
        }
    }

    return arr2;
}

console.log(missingLetter(string1));