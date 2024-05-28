function numberDiamond(rows){
    // Upper part of the pattern
    for (let i = 1; i <= rows; i++) {
        let line = '';

        // Add leading spaces
        for (let j = 1; j <= rows - i; j++) {
            line += ' ';
        }

        // Add descending part
        for (let k = i; k >= 1; k--) {
            line += k;
        }

        // Add ascending part
        for (let l = 2; l <= i; l++) {
            line += l;
        }

        console.log(line);
    }

    // Lower part of the pattern
    for (let i = rows - 1; i >= 1; i--) {
        let line = '';

        // Add leading spaces
        for (let j = 1; j <= rows - i; j++) {
            line += ' ';
        }

        // Add descending part
        for (let k = i; k >= 1; k--) {
            line += k;
        }

        // Add ascending part
        for (let l = 2; l <= i; l++) {
            line += l;
        }

        console.log(line);
    }
}

numberDiamond(4)


//     1
//    212
//   32123
//  4321234
//   32123
//    212
//     1

   