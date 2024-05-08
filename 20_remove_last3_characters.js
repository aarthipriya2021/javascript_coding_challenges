// May-07, 2024
// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/remove-last-characters-string-javascript
// Status: SUCCESS


function last3Characters(str){
    let newStr = "";
    for(let i = 0; i < str.length - 3; i++){
        newStr += str[i];
    }
    return newStr;
}

console.log(last3Characters("Javascript"));

// o/p: Javascr


// let removeLast3Characters = "javascript".slice(0, -3)
// console.log(removeLast3Characters);