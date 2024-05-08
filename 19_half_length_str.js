// May-07, 2024
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/extract-first-half-string-javascript
// Status: SUCCESS


function halfLengthofString(str) {
    // getting halflength of string
    let halfLength = str.length / 2;

    let newStr = "";

    for (let i = 0; i < halfLength; i++) {
        newStr += str[i];  
    }
    return newStr;
}

console.log(halfLengthofString("JAVASCRIPT"))

// o/p : JAVAS



// let halfLengthString = "JAVASCRIPT".slice(0, "JAVASCRIPT".length / 2)
// console.log(halfLengthString);