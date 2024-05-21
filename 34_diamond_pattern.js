function diamond(rows) {
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < rows - i; j++){
            line += " ";
        }
        for(let k = 0; k < 2*i - 1; k++ ){
            line += "*"
        }
        console.log(line)
    }
    for(let i = rows - 1; i > 0; i--){
        let line = " ";
        for(let j = 0; j < rows - i; j++){
            line += " ";
        }
        for(let k = 0; k < 2*i - 1; k++ ){
            line += "*"
        }
        console.log(line)
    }
}
diamond(5)