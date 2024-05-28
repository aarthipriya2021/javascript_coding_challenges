function numberPattern06(rows){
    for(let i = 1; i <= rows; i++){
        let number = 1; 
        let line = " "
        for(let j = i; j > 0; j--){
            line += j+ " "
        }
        console.log(line);
    }
}

numberPattern06(8)

// o/p:
//  1 
//  2 1 
//  3 2 1
//  4 3 2 1
//  5 4 3 2 1
//  6 5 4 3 2 1
//  7 6 5 4 3 2 1
//  8 7 6 5 4 3 2 1