const number = Number(prompt('Введите любое целое неотрицательное число'));
const numbers = [];

if (Number.isInteger(number) && number >= 0) {
    for (let i = 0; i <= number; i += 1) {
        numbers.push(i);
    }

    console.log(numbers);
} else {
    console.log('Необходимо ввести целое неотрицательное число');
}
