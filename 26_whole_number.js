// May-11, 2024
// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/check-if-number-is-whole
// Status: SUCCESS

function wholeNumber(a) {
    return a === Math.round(a);
}
console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));

// o/p true false true false



// function myFunction(a) {
//     return a - Math.floor(a) === 0
//   }