function numberPattern10(rows){
    for(let i = rows; i >= 0; i--){
        let line = " ";
        let number = 1;
        for(let j = 0; j <= i; j++){
            line += number + " "
            number++
        }
        console.log(line);
    }
}
numberPattern10(8);

// o/p:
//  1 2 3 4 5 6 7 8 9 
//  1 2 3 4 5 6 7 8 
//  1 2 3 4 5 6 7
//  1 2 3 4 5 6
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1