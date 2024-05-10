// May-09, 2024
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/times-character-occurs-string
// Status: SUCCESS

function characterCount(a, b) {
  let count = 0;
  for (let i = 0; i <= b.length - a.length; i++) {
    if (b.substr(i, a.length) === a) {
      count++;
    }
  }
  return count;
}

console.log(characterCount("m", "programming"));
console.log(characterCount('h', 'how many times does the character occur in this sentence?'));
console.log(characterCount('?', 'how many times does the character occur in this sentence?'));
console.log(characterCount('z', 'how many times does the character occur in this sentence?'));

// function myFunction(a, b) {
//     return b.split(a).length - 1
// }

// console.log(myFunction("m", "programming"));

// o/p: 2 4  1  0
