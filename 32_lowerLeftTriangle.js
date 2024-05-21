function lowerLeft(rows){
    for(let i = rows; i >= 0; i--){
        let line = " ";
        for(let j = 0; j < i; j++){
            line += "* "
        }
        console.log(line);
    }
}
lowerLeft(5)

// o/p
// * * * * * 
// * * * * 
// * * *
// * *
// *
