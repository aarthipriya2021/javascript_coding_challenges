function numberPattern07(rows){
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < i; j++){
            if(j % 2 == 0){
                line += "1"
            }else{
                line += "0"
            }
        }
        console.log(line);
    }
}
numberPattern07(7)

// o/p:
//  1
//  10
//  101
//  1010
//  10101
//  101010
//  1010101