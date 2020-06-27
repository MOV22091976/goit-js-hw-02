"use strict";

//Напиши функцию formatString(string) которая принимает строку и форматирует 
//ее если необходимо.
//Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
//Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет 
//в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
    return string.length <= 40 ? string : string.slice(0, 40) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// вернется форматированная строка


// ========== другие варианты

// const formatString = function (strings, maxLength = 40) {

//     //     if (strings.length > maxLength) {
//     //         return strings.slice(0, maxLength - 1) + '…';
//     //         //троеточие - юникод.символ т.е.занимает место одного символа
//     //         //поэтому - 1 чтобы была длинна ровно 40
//     //     } else {
//     //         return strings;
//     //     }
//     // };

//     //==================== через for of =============

//     for (const string of strings) {
//         if (strings.length > maxLength) {
//             // maxLength = words;
//             return strings.slice(0, maxLength - 3) + '...';
//         } else {
//             return strings;
//         }
//     }
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', ), );
// // вернется форматированная строка