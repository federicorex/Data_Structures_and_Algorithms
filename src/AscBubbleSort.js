let ascBubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
		let temp = 0;
		for(let j = i + 1 ; j < arr.length; j++) {
			if(arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		} 
	}
    return arr;
}

let descBubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
		let temp = 0;
		for(let j = i + 1 ; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		} 
	}
    return arr;
}


let arr1 = [3,1,6,2,7,4];

console.log(ascBubbleSort(arr1));
console.log(descBubbleSort(arr1));