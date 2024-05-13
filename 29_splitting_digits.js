// May-11, 2024
// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/split-number-into-digits/
// Status: SUCCESS


function splittingDigits(a) {
    return a.toString().split("").map(Number)
}

console.log(splittingDigits(10));
console.log(splittingDigits(12345));
console.log(splittingDigits(931));