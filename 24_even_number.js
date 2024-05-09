// May-09, 2024
// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/check-if-number-is-even/
// Status: SUCCESS


function evenNumber(a) {
    return a % 2 === 0 ? true : false
}
console.log(evenNumber(4));
console.log(evenNumber(9));
console.log(evenNumber(14));
console.log(evenNumber(-4));
console.log(evenNumber(47));


//  o/p : true   false   true  true  false



