// May-07, 2024
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/get-last-characters-string-javascript
// Status: SUCCESS


function lastNcharacters(str){
    
    // empty variable to store last 3 characters
    let newStr = "";
    
    // reversing string
    let reversedStr = str.split("").reverse().join("");
    
    // loop to interate thru string
    for (let i = 0; i < 3 && i < reversedStr.length; i++) {
        newStr += reversedStr[i];
    }
    // returning last 3 characters
    return newStr.split("").reverse().join("");
}

console.log(lastNcharacters("javascript"))
console.log(lastNcharacters("Television"))
console.log(lastNcharacters("PRIYA"))
console.log(lastNcharacters("LAPTOP"))
console.log(lastNcharacters("house"))


// output
// ipt
// ion
// IYA
// TOP
// use


