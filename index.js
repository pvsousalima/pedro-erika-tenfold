
/*
    Solution for the challenge for tenfold
    Pedro Victor de Sousa Lima and Erika Soares
*/

// conversion into arabic from roman
var toArabic = require('roman-numerals').toArabic;

// values relative to the language
var values = {
    isk:    "I",
    vev:    "V",
    xesh:   "X",
    leth:   "L",
    cresh:  "C",
    dorn:   "D",
    mern:   "M"
}

// get the amount in credits
function getAmountInCredits(quotation, alienNumber) {

    // does split on input
    var split = alienNumber.split(' ');

    var roman = ''
    split.forEach(function(value){
        roman += values[value];
    })

    try {
        var result = toArabic(roman); // get the result from arabic
        return quotation * result; // return the final result with the cotation applied (credits)
    } catch (err){
        return NaN; // if conversion to number is no valid then returns NaN
    }
}

console.log(getAmountInCredits(1, 'isk isk'));
console.log(getAmountInCredits(2, 'isk isk'));
console.log(getAmountInCredits(3.14, 'isk isk'));
console.log(getAmountInCredits(1.2, 'isk vev'));
console.log(getAmountInCredits(1.2, 'isk not'));
