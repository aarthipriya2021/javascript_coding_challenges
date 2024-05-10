// May-09, 2024
// Write a function that takes two numbers (a and b) as argument. Return b percent of a
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/return-percentage-of-number/
// Status: SUCCESS


function calculatePercentage(a, b) {
    return (b/100) * a;
}

console.log(calculatePercentage(100,50));
console.log(calculatePercentage(10,1));
console.log(calculatePercentage(500,25));

// o/p : 50    0.1    125

