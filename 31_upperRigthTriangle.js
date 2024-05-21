function upperRightTriangle(rows){
    for(let i= 1; i <= rows; i++){
        let line = " ";
        for(let  j = 0; j < rows-i; j++){
            line += " "
        }
        for(let k = 0; k < i; k++){
            line += "*"
        }
        console.log(line);
    }
}

upperRightTriangle(5)

// o/p
//      *
//     **
//    ***
//   ****
//  *****