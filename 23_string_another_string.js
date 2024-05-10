// May-09, 2024
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/check-if-string-contains-string/
// Status: SUCCESS



function stringContainsString(a, b) {
    // return (a.indexOf(b) === -1 ? (a+b) : (b+a));
    return (a.includes(b) ? (b+a) : (a+b) );
}
console.log(stringContainsString("plums", "sweet"));
console.log(stringContainsString('lips', 's'));
console.log(stringContainsString('Java', 'script'));
console.log(stringContainsString(' think, therefore I am', 'I'));


// o/p : plumssweet   slips    Javascript          I think, therefore I am


