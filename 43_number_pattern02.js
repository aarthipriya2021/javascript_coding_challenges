function numberPattern02(rows){
    let k = 1;
    for(let i = 1; i <= rows; i++){
        let line = "";
        for(let j = 0; j < i+1; j++){
            line += k++ + " ";
        }
        console.log(line);
    }

}
numberPattern02(5);

// o/p:
// 1 2 
// 3 4 5 
// 6 7 8 9
// 10 11 12 13 14
// 15 16 17 18 19 20