let findTheGreatestNumV1 = (arr) => {
	let greatestNum = 0;
	let step = 0;
	for(let i = 0; i < arr.length; i++) {
        if(arr[i + 1] !== undefined && arr[i] > arr[i + 1] && arr[i] > greatestNum) {
            greatestNum = arr[i];
		} else if (arr[i + 1] !== undefined && arr[i + 1] > arr[i] && arr[i + 1] > greatestNum) {
            greatestNum = arr[i + 1];
		} else if (arr[i + 1] === undefined && arr[i] > greatestNum){
            greatestNum = arr[i];
        }
        step++;
	}
	console.log(step);
	console.log(greatestNum);
}

let findTheGreatestNumV2 = (arr) => {
    let greatestNum = arr[0];
    let step = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > greatestNum) {
            greatestNum = arr[i];
        }
        step++;
    }
    console.log(step);
    console.log(greatestNum);
}

let arr2 = [4000,1000,10000,5,2000];
let arr3 = [2000];

findTheGreatestNumV1(arr2);
findTheGreatestNumV2(arr2);
findTheGreatestNumV2(arr3);