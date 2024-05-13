// May-11, 2024
// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/round-2-decimal-digits/
// Status: SUCCESS


function decimalPlace(a) {
    return parseFloat(a.toFixed(2))
}

console.log(decimalPlace(1.2345));
console.log(decimalPlace(2.12397));
console.log(decimalPlace(3.136));
console.log(decimalPlace(1.12397));
console.log(decimalPlace(26.1379));


// o/p  1.23   2.12   3.14   1.12  26.14



