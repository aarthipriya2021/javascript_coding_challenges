function numberPattern11(rows){
    for(let i = rows; i >= 0; i--){
        let line = " ";
        // let number = 8;
        for(let j = i; j > 0 ; j--){
            line += j + " "
        }
        console.log(line);
    }
}
numberPattern11(8)


// o/p:
//  8 7 6 5 4 3 2 1 
//  7 6 5 4 3 2 1 
//  6 5 4 3 2 1
//  5 4 3 2 1
//  4 3 2 1
//  3 2 1
//  2 1
//  1