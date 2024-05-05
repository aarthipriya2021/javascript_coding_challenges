function reverseArray(arr){
    let reversedArray = [];
    for(let i = arr.length- 1 ; i >= 0; i-- ){
        reversedArray.push(arr[i])
    }
    return reversedArray;

}

const originalArray = [1,3,5,7,9]
console.log(reverseArray(originalArray));