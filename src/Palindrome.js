let isPalindrome = (string) => {
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    if(newString === string){
        return true;
    }
    return false;
}

console.log(isPalindrome("fafafafbbbbbbbbbbbbbbbbbbbbbbbbbbbbfafafa"));