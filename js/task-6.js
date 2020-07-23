"use strict";

let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt('Введите число')
    if (input === null) break
    if (Number.isNaN(+input)) {
        alert('Вы ввели не число')
        continue
    }
    numbers.push(+input)
}
if (numbers.length) {
    for (const number of numbers) {
        total += number
    }
}
console.log(`Общая сумма чисел равна ${total}`);