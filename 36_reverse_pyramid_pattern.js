function reversePyramid(rows) {
    for (let i = rows; i > 0 ; i--) {
        let line = "";
        for(let j = 0; j < rows-i; j++){
            line += " "
        }
        for(let k = 0; k < 2*i - 1; k++){
            line += "*"
        }
        console.log(line);
    }
}
reversePyramid(6)