// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

// function equalValues(a, b) {
//     if ((typeof a) === (typeof b)){
//         return true
//     } else{
//         return false;
//     }
// }
function equalValues(a, b) {
    return typeof a === typeof b && a === b;
}
console.log(equalValues(3, [4,2]));
console.log(equalValues(9, 'a'));
console.log(equalValues({a: "g", b: "l"}, [4,2]));

// o/p:false, false, false