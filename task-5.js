"use strict";

const checkForSpam = function (message) {
    const isSearchWord = message.toLowerCase()
    if (isSearchWord.includes('sale') || isSearchWord.includes('spam')) {
        return true
    }
    return false

};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));