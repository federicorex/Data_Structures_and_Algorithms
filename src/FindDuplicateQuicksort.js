let array1 = [1,4,7,2,8,6,4];
let array2 = [1,4,7,2,8,6,5,355];

let partition = (arr, leftPointer, rightPointer) => {
	let pivotIndex = rightPointer;
	
	let pivot = arr[pivotIndex];
	
	rightPointer--;
	
	let temp = null;
	
	while(true) {
		while(arr[leftPointer] < pivot) {
			leftPointer++;
		}
		
		while(arr[rightPointer] > pivot) {
			rightPointer--;
		}
		
		if(leftPointer >= rightPointer) {
			break;
		} else {
            temp = arr[leftPointer];
            
            arr[leftPointer] = arr[rightPointer];
            
            arr[rightPointer] = temp;
        }
		
	
	}
	
	temp = arr[leftPointer];
		
	arr[leftPointer] = arr[pivotIndex];
		
	arr[pivotIndex] = temp;
	
	return leftPointer;
}

let quicksort = (arr, leftPointer, rightPointer) => {
	if(rightPointer - leftPointer <= 0) {
		return null;
	}
	
	let pivotIndex = partition(arr, leftPointer, rightPointer);
	
	quicksort(arr, leftPointer, pivotIndex - 1);
	
	quicksort(arr, pivotIndex + 1, rightPointer);
	
	return arr;
}

let findDuplicateQuicksort = (arr, leftPointer, rightPointer) => {
	quicksort(arr, leftPointer, rightPointer);

	let duplicate = null;

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === arr[i + 1]) {
			duplicate = arr[i];
		}
	}

	return duplicate;
}

let greatestProductOfThreeNums = (arr, leftPointer, rightPointer) => {
	quicksort(arr, leftPointer, rightPointer);

	let greatestProduct3Nums = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];

	return greatestProduct3Nums;
}

let findMissingNum = (arr, leftPointer, rightPointer) => {
	
	quicksort(arr, leftPointer, rightPointer);

	let numsMapIndexes = {};
	let numsMapValues = {};
	let missingNumsMap = [];

	for(let i = 0; i < arr.length; i++) {
		numsMapValues[arr[i]] = true;
		numsMapIndexes[i] = true;
	}
	
	for(let element in numsMapIndexes) {
		if(!numsMapValues[element]) {
			missingNumsMap[element] = element;
		}
	}

	if(missingNumsMap.length !== 0) {
		return missingNumsMap;
	} else {
		return "All numbers are present";
	}
}

let findMaxNum1 = (arr) => {
	let maxNum = null;
	
	for(let i = 0; i < arr.length - 1; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i] > arr[j]) {
				maxNum = arr[i];
			} else {
				maxNum = arr[j];
			}
		}
	}

	return maxNum;
}

let findMaxNum2 = (arr, leftPointer, rightPointer) => {
	quicksort(arr, leftPointer, rightPointer);

	let maxNum = arr[arr.length - 1];

	return maxNum;
}

let findMaxNum3 = (arr) => {
	let maxNum = Number.MIN_VALUE;

	arr.forEach(element => {
		if(element > maxNum) {
			maxNum = element;
		}
	});

	return maxNum;
}

console.log(quicksort(array1, 0, array1.length - 1));
console.log(findDuplicateQuicksort(array1, 0, array1.length - 1));
console.log(findMissingNum(array2, 0, array2.length - 1));
console.log(findMaxNum1(array2));
console.log(findMaxNum2(array2, 0, array2.length - 1));
console.log(findMaxNum3(array2));