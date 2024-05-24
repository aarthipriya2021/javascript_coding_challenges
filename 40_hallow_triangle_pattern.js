function hallowTriangle(rows){
    for(let i=1; i <= rows; i++){
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
        console.log(line)
    }
}
hallowTriangle(9)