function rigthPascalTriangle(rows) {
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < i; j++){
            line += "* ";
        }
        console.log(line);
    }
    for(let i = rows-1; i > 0; i--){
        let line = " ";
        for(let j = 0; j < i; j++){
            line += "* ";
        }
        console.log(line);
    }
}
rigthPascalTriangle(5)

// o/p:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 