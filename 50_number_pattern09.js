function numberPattern09(rows){
    for(let i = rows; i >= 0; i--){
        let line = " ";
        let number = 9;
        for(let j = 0; j <= i; j++){
            line += number + " "
            number--
        }
        console.log(line);
    }
}
numberPattern09(8)

// o/p:
//  9 8 7 6 5 4 3 2 1 
//  9 8 7 6 5 4 3 2 
//  9 8 7 6 5 4 3
//  9 8 7 6 5 4
//  9 8 7 6 5
//  9 8 7 6
//  9 8 7
//  9 8
//  9