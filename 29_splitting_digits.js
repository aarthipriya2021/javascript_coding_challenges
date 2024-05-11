// May-11, 2024
// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/multiplication-division-comparison-operators
// Status: SUCCESS


function splittingDigits(a) {
    return a.toString().split("").map(Number)
}

console.log(splittingDigits(10));
console.log(splittingDigits(12345));
console.log(splittingDigits(931));