function lowerRightTriangle(rows){
    for(let i = rows; i > 0; i--){
        let line = " ";
        for(let j = 0; j < rows-i; j++){
            line += " "
        }
        for(let k = 0; k < i; k++){
            line += "*"
        }
        console.log(line);
    }
}
lowerRightTriangle(5);

// o/p
// *****
//  ****
//   ***
//    **
//     *