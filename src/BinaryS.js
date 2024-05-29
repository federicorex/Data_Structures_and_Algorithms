function binarySearch(arr, elem) {
    let max = arr.length - 1;
    let min = 0;
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        
        if (arr[mid] === elem) {
            return mid; // elemento trovato, restituisce l'indice
        } else if (arr[mid] < elem) {
            min = mid + 1; // cerca nella metà superiore
        } else {
            max = mid - 1; // cerca nella metà inferiore
        }
    }
    
    return -1; // elemento non trovato
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let element1 = 7;
console.log(binarySearch(arr1, element1));