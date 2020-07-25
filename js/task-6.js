"use strict";

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число')
    if (input !== null) {
        if (Number.isNaN(+input)) {
            alert('Вы ввели не число');
            continue;
        }
        numbers.push(+input)
    }
}
while (input !== null)

for (const number of numbers) {
    total += number
}

console.log(`Общая сумма чисел равна ${total}`);