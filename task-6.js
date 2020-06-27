"use strict";
// Напиши скрипт со следующим функционалом:
// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается 
// до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, 
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total. 
// Используй цикл for или for...of. После чего в консоль выведи 
// строку 'Общая сумма чисел равна [сумма]'.

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
console.log(numbers);