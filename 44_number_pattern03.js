function numberPattern03(rows){
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < rows-i; j++){
            line += " ";
        }
        for(let k = 0; k < i; k++){
            line += i + " "
        }
        console.log(line);
    }
}
numberPattern03(5);

// o/p:
//      1 
//     2 2 
//    3 3 3
//   4 4 4 4
//  5 5 5 5 5