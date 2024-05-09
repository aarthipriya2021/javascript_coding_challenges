// May-09, 2024
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/basic-math-operators-javascript/
// Status: SUCCESS


function mathOperators(a, b, c, d, e, f) {
    return Math.pow(((a + b - c) * d / e), f );
}

console.log(mathOperators(6,5,4,3,2,1));
console.log(mathOperators(6,2,1,4,2,3));
console.log(mathOperators(2,3,6,4,2,3));



// o/p :10.5     2744     -8

