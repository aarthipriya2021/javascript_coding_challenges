function numberPattern04(rows){
    for(let i = 1; i <= rows; i++){
        let line = " "
        for(let j = 0; j < i; j++){
            line += i + " "
        }
        console.log(line)
    }
}

numberPattern04(9)

// o/p:
// 1 
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
// 7 7 7 7 7 7 7
// 8 8 8 8 8 8 8 8
// 9 9 9 9 9 9 9 9 9