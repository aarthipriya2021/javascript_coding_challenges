function hallowTriangle(rows){
    for(let i=1; i <= rows; i++){
        let line = "";
        // Print leading spaces
        for(let j = i; j < rows; j++){
            line += " "
        }
        // Print stars and inner spaces
        for (let k = 0; k <= (2*i - 1); k++){
            if(k === 1 || i === rows || k === (2*i-1)){
                line += "*"
            }else{
                line += " ";
            }
        }
        console.log(line)
    }
}
hallowTriangle(9)

// o/p: 
//          *
//         * *
//        *   *
//       *     *
//      *       *
//     *         *
//    *           *
//   *             *
// ******************