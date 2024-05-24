function reversedHallowTriangle(rows){
    for(let i = rows; i > 0; i--){
        let line = "";
        for(let j = i; j < rows; j++){
            line += " "
        }
        for (let k = 0; k <= (2*i - 1); k++){
            if(k === 1 || i === rows || k === (2*i-1)){
                line += "*"
            }else{
                line += " ";
            }
        }
        console.log(line);
    }
}
reversedHallowTriangle(9)