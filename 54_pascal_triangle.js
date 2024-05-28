function printPascalTriangle(rows) {
    let pascal = [];

    // Generate Pascal's Triangle
    for (let i = 0; i < rows; i++) {
        pascal[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                pascal[i][j] = 1;
            } else {
                pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
            }
        }
    }

    // Print Pascal's Triangle
    for (let i = 0; i < rows; i++) {
        let line = '';

        // Add leading spaces for center alignment
        line += ' '.repeat((rows - i - 1) * 2);

        // Add Pascal's Triangle numbers
        for (let j = 0; j <= i; j++) {
            line += pascal[i][j] + '   ';
        }

        console.log(line);
    }
}

// Number of rows to print
const rows = 5;
printPascalTriangle(rows);
