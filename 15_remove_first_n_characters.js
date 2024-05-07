// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

// function removeCharacters(str) {
//     return str.slice(3);
// }


function removeCharacters(str){
    let newStr = "";

    for(let i = 3; i < str.length; i++){
        newStr += str[i];
    }

    return newStr;
}

console.log(removeCharacters("programming"));
console.log(removeCharacters("coding"));
console.log(removeCharacters("markup"));
console.log(removeCharacters("cascading"));
console.log(removeCharacters("client"));

// o/p
// gramming
// ing
// kup
// cading
// ent




// commit link : https://github.com/aarthipriya2021/problem_solving_code/commit/dda09fd2ce8cfcbf7fdd39451fb5642cb9b4f167