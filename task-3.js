"use strict";

// Напиши фукцнию findLongestWord(string), которая принимает 
// параметром произвольную строку (в строке будут только слова 
// и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
    const words = string.split(' ');
    let isLongesWord = words[0];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length > isLongesWord.length) {
            isLongesWord = words[i];
        }
    }
    return isLongesWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'