function numberPattern01(rows){
    for(let i = 1; i <= rows; i++){
        let line = "";
        let number = 1;
        for(let j = 0; j < i; j++){
            line += number + " "
            number++;
        }
        console.log(line);
    }
}
numberPattern01(9)

// o/p:
// 1 
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9



// function numberPattern02(rows){
//     for(let i = 1; i <= rows; i++){
//         let line = "";
//         let number = 9;
//         for(let j = 0; j < i; j++){
//             line += number + " "
//             number--;
//         }
//         console.log(line);
//     }
// }
// numberPattern02(9);


// o/p :
// 9 
// 9 8 
// 9 8 7
// 9 8 7 6
// 9 8 7 6 5
// 9 8 7 6 5 4
// 9 8 7 6 5 4 3
// 9 8 7 6 5 4 3 2
// 9 8 7 6 5 4 3 2 1