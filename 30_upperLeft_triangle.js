function upperLeftTriangle(rows){
    for(let i=1; i <= rows; i++){
        let line=" ";
        for(let j=0; j < i; j++){
            line += "* "
        }
        console.log(line);
    }
}
upperLeftTriangle(5)

// o/p
// * 
// * * 
// * * *
// * * * *
// * * * * *