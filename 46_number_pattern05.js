function numberPattern05(rows){
    for(let i = 1; i <= rows; i++){
        let number = 9; 
        let line = " "
        for(let j = 0; j < i; j++){
            line += number + " "
            number--
        }
        console.log(line);
    }
}

numberPattern05(9)

// o/p:
//  9 
//  9 8 
//  9 8 7
//  9 8 7 6
//  9 8 7 6 5 
//  9 8 7 6 5 4
//  9 8 7 6 5 4 3
//  9 8 7 6 5 4 3 2
//  9 8 7 6 5 4 3 2 1