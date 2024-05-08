// May-07, 2024
// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/get-first-characters-string-javascript
// Status: SUCCESS


function firstNcharacters(str) {
    let newStr = "";
    for(let i = 0;i < 3 && i < str.length; i++){
        newStr += str[i]
    }
    return newStr;
}

console.log(firstNcharacters("javascript"))
console.log(firstNcharacters("Television"))
console.log(firstNcharacters("PRIYA"))
console.log(firstNcharacters("LAPTOP"))
console.log(firstNcharacters("house"))


// o/p
// jav
// Tel
// PRI
// LAP
// hou

// let firstNcharacters = "javascript".slice(0,3)
// console.log(firstNcharacters)