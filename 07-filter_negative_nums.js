function negativeNumbers(arr){
    return arr.filter(number => number >= 0)
}
let array = [0, -9, 2, -5, 3, 2, 8, -4]
console.log(negativeNumbers(array));
