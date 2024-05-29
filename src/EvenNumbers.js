let averageOfEvenNumbers = (arr) => {
	/**
	* The two initializations below add 2 steps on our Big O Notation
	* so, we can consider O(+ 2); 
	**/
	
	let sum = 0;
	
	let countOfEvenNumbers = 0;
	
	/**
	* The block below --for loop-- needs to iterate the entire array
	* to search potential even numbers, so we consider this block as a O(N);
	**/
	arr.forEach((element) => {
		/**
		* Below we have 3 more steps for every number --obviously in the worst case--:
		* the if statement, the sum of the elements and the count of the elements. So we can 
		* consider that for every element in the array --in the worst case-- we have 3 more step in addition 
		* to the for loop, so we have O(3N);
		**/
		
		if(element % 2 == 0) {
			sum += element;
			countOfEvenNumbers++;
		}
	})
	
	/**
	* The last math operation --division-- below adds 1 step on our Big O Notation
	* so, we can consider O(+ 1); 
	**/
	return sum / countOfEvenNumbers;
	
	/**
	* To sum up all the steps for our algorithm in Big O Notation we have O(3N + 3), but we know 
	* that in the Big O Notation the constants are not considered so at the end we have O(N);
	**/
}

let numbers = [1233, 323, 334, 543, 66, 7898, 4];

console.log(averageOfEvenNumbers(numbers));