// May-11, 2024
// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/multiplication-division-comparison-operators/
// Status: SUCCESS


function arithmeticOperators(a, b) {
    return (a < b) ? (a /b): (a *b )
}

console.log(arithmeticOperators(10, 100));
console.log(arithmeticOperators(90, 45));
console.log(arithmeticOperators(8, 20));
console.log(arithmeticOperators(2, 0.5));

// o/p   0.1  4050   0.4   1


