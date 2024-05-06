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
