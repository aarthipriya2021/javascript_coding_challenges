function removeSpaces(str){
    return str.replace(/\s/g, '');
}

const string = "Hi,    How are you ????";
console.log(removeSpaces(string));