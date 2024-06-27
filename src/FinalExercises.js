let basketPlayers = [
    {firstName: "Jill", lastName: "Huang", team: "Gators"},
    {firstName: "Janko", lastName: "Barton", team: "Sharks"},
    {firstName: "Wanda", lastName: "Vakulskas", team: "Sharks"},
    {firstName: "Jill", lastName: "Moloney", team: "Gators"},
    {firstName: "Luuk", lastName: "Watkins", team: "Gators"}
]

let footballPlayers = [
    {firstName: "Hanzla", lastName: "Radosti", team: "32ers"},
    {firstName: "Tina", lastName: "Watkins", team: "Barleycorns"},
    {firstName: "Alex", lastName: "Patel", team: "32ers"},
    {firstName: "Jill", lastName: "Huang", team: "Barleycorns"},
    {firstName: "Wanda", lastName: "Vakulskas", team: "Barleycorns"}
]

let numbersArr1 = [0, 3, 1, 5, 2];
let numbersArr2 = [0, 1, 3, 2, 4, 5, 7];
let numbersArr3 = [0, 1, 3, -20, -4, 5, -100];

let stockPrices1 = [10, 7, 5, 8, 11, 2, 6];
let stockPrices2 = [10, 7, 5, 8, 11, 2, 30];
let stockPrices3 = [10, 7, 5, 8, 11, 2, 30, 1];

let temperatures1 = [98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1];

let checkPlayerForBothSports = (array1, array2) => {
    /**
     * Time complexity: O(N + M),
     * Space complexity: O(N)
     */
    
    let hashTable1 = {};
    let playerInCommonArray = [];

    for(let player1 of array1) {
        if(!hashTable1[player1.firstName] && !hashTable1[player1.lastName]) {
            hashTable1[player1.firstName] = true;
            hashTable1[player1.lastName] = true;
        }
    }

    for(let player2 of array2) {
        if(hashTable1[player2.firstName] && hashTable1[player2.lastName]) {
            playerInCommonArray.push(player2.firstName + " " + player2.lastName);
        }
    }

    return playerInCommonArray; 
}

let findTheMissingNumber = (array) => {
    /**
     * Time complexity: O(N),
     * Space complexity: O(N)
     */
    let allNumbersArray = [];
    let hashTable1 = {};
    
    for(let i = 0; i <= array.length; i++) {
        allNumbersArray[i] = i;
    }

    for(let num1 of array) {
        hashTable1[num1] = true;
    }

    for(let num2 of allNumbersArray) {
        if(!hashTable1[num2]) {
            return num2;
        }
    }

    return null;
}

let calcGreatestProfit = (stockPricesArray) => {
    /**
     * Time complexity: O(N),
     * Space complexity: O(1)
     */
    
    let buyPrice = stockPricesArray[0];
    let greatestProfit = 0;

    for(let price of stockPricesArray) {
        let possibleProfit = price - buyPrice;
        
        if(price < buyPrice) {
            buyPrice = price;
        } else if(possibleProfit > greatestProfit) {
            greatestProfit = possibleProfit;
        }
    }

    return greatestProfit;
}

let highestProduct = (numbersArray) => {
    /**
     * Time complexity: O(N),
     * Space complexity: O(1)
     */
    
    let maxProduct = null;

    for(let i = 0; i < numbersArray.length - 1; i++) {
        if(!maxProduct || maxProduct < (numbersArray[i] * numbersArray[i + 1])) {
            maxProduct = numbersArray[i] * numbersArray[i + 1];
        }
    }

    return maxProduct;
}

let sortTemperatures = (temperaturesArray) => {
    /**
     * Time complexity: O(N),
     * Space complexity: O(N)
     */
    
    let hashTable1 = {};
    let finalHashTable = {};
    let arr97to98 = [];
    let arr98to99 = [];
    let duplicates = [];
    

    for(let temperature of temperaturesArray) {
        if(!hashTable1[temperature]) {
            hashTable1[temperature] = true;
        } else {
            duplicates.push(temperature);
        }
    }

    for(let temperature in hashTable1) {
        if(temperature === "97.0") {
            arr97to98.push(97.0);
        } else if(temperature === "97.1") {
            arr97to98.push(97.1);
        } else if(temperature === "97.2") {
            arr97to98.push(97.2);
        } else if(temperature === "97.3") {
            arr97to98.push(97.3);
        } else if(temperature === "97.4") {
            arr97to98.push(97.4);
        } else if(temperature === "97.5") {
            arr97to98.push(97.5);
        } else if(temperature === "97.6") {
            arr97to98.push(97.6);
        } else if(temperature === "97.7") {
            arr97to98.push(97.7);
        } else if(temperature === "97.8") {
            arr97to98.push(97.8);
        } else if(temperature === "97.9") {
            arr97to98.push(97.9);
        }    
    }    
    
    for(let temperature in hashTable1) {
        if(temperature === "98.0") {
            arr98to99.push(98.0);
        } else if(temperature === "98.1") {
            arr98to99.push(98.1);
        } else if(temperature === "98.2") {
            arr98to99.push(98.2);
        } else if(temperature === "98.3") {
            arr98to99.push(98.3);
        } else if(temperature === "98.4") {
            arr98to99.push(98.4);
        } else if(temperature === "98.5") {
            arr98to99.push(98.5);
        } else if(temperature === "98.6") {
            arr98to99.push(98.6);
        } else if(temperature === "98.7") {
            arr98to99.push(98.7);
        } else if(temperature === "98.8") {
            arr98to99.push(98.8);
        } else if(temperature === "98.9") {
            arr98to99.push(98.9);
        } else if(temperature === "99.0") {
            arr98to99.push(99.0);
        }
    }
    finalHashTable.finalTemperaturesArray = arr97to98.concat(arr98to99);
    finalHashTable.duplicateTemperatures = duplicates;

    return finalHashTable;
}

console.log(checkPlayerForBothSports(basketPlayers, footballPlayers));
console.log(findTheMissingNumber(numbersArr1));
console.log(highestProduct(numbersArr3));
console.log(sortTemperatures(temperatures1));
console.log(calcGreatestProfit(stockPrices1));
console.log(calcGreatestProfit(stockPrices2));
console.log(calcGreatestProfit(stockPrices3));