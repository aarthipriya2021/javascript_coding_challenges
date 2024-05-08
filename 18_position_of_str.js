// May-07, 2024
// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/index-of-substring-in-string
// Status: SUCCESS



function positionOfStr(str) {
    for (let i = 0; i < str.length; i++){
        // if str[i] and str[i+2] met "i" and "s" , returns i;
        if(str[i] == "i" && str[i + 1] == "s"){
            return i;
        }
    }
    // if not found either "i" or "s" , returns -1.
    return -1;
}

console.log(positionOfStr("praise"));
console.log(positionOfStr("risky"));
console.log(positionOfStr("paris"));

// o/p 
// 3 1 3


// let positionOfStr = "praise".indexOf("is")
// console.log(positionOfStr);
