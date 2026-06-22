const size = 3;

for (let row = 0; row < size; row += 1) {
    let line = '';

    for (let column = 0; column < size; column += 1) {
        line += (row + column) % 2 === 0 ? 'x' : 'o';

        if (column < size - 1) {
            line += ' ';
        }
    }

    console.log(line);
}
