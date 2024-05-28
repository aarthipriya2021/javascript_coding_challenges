function numberPattern08(rows){
    for(let i = 1; i <= rows; i++){
        let line = " ";
        let number = 1
        for(let j = 0; j < i; j++){
            line += number + " "
            number++
        }
        console.log(line);
    }

    for(let i = rows-1; i >= 0; i--){
        let line = " ";
        let number = 1
        for(let j = 0; j < i; j++){
            line += number + " "
            number++
        }
        console.log(line);
    }
}
numberPattern08(8)

// o/p:
// 1 
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1