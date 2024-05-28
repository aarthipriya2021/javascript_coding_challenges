function numberPattern12(rows){
    for (let i = 1; i <= rows; i++) {
        let line = '';

        // Prints first half of the row
        for (let j = 1; j <= i; j++) {
            line += j + ' ';
        }

        // Prints second half of the row
        for (let j = i - 1; j >= 1; j--) {
            line += j + ' ';
        }

        console.log(line);
    }
}
numberPattern12(8)

// o/p:
// 1 
// 1 2 1 
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// 1 2 3 4 5 6 5 4 3 2 1
// 1 2 3 4 5 6 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 7 6 5 4 3 2 1

