function sandGlassPattern(rows) {
    for(let i = rows; i > 0; i--){
        let line = " ";
        for(let j = 0; j < rows - i; j++){
            line += " ";
        }
        for(let k = 0; k < i; k++){
            line += "* "
        }
        console.log(line);
    }
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < rows - i; j++){
            line += " ";
        }
        for(let k = 0; k < i; k++){
            line += "* "
        }
        console.log(line);
    }
}
sandGlassPattern(6)

// o/p:
//  * * * * * * 
//   * * * * * 
//    * * * * 
//     * * * 
//      * * 
//       * 
//       * 
//      * * 
//     * * * 
//    * * * * 
//   * * * * * 
//  * * * * * * 
