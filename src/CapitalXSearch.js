let findCapitalX = (string) => {
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'X') {
            return true;
        }
    }
    return false;
}

console.log(findCapitalX("Xena"));