function getNthCharacter(str, n) {
    if((n > 0)&& (n < str.length)){
        return str.charAt(n);
    } else {
        return "Invalid Index";
    }
}

console.log(getNthCharacter("world", 3))
console.log(getNthCharacter("coding", 2))
console.log(getNthCharacter("javascript", 7))
console.log(getNthCharacter("Hello", 5))

// o/p
// l
// d
// i
// Invalid Index