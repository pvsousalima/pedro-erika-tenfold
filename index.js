
/*
    Solution for the challenge for tenfold
    Pedro Victor de Sousa Lima and Erika Soares
*/

// values relative to the language
var values = {
    isk:	"I",
    vev:    "V",
    xesh:   "X",
    leth:   "L",
    cresh:  "C",
    dorn:   "D",
    mern:   "M"
}

// conversion into arabic from roman
var toArabic = require('roman-numerals').toArabic;

// get the amount in credits
function getAmountInCredits(quotation, alienNumber) {

    // does split on input
    var split = alienNumber.split(' ');

    var roman = ''
    split.forEach(function(value, key){
        roman += values[value];
    })

    try {

        // get the result from arabic
        var result = toArabic(roman);

        // return the final result with the cotation applied (credits)
        return quotation * result;
        
    } catch (err){

        // if conversion to number is no valid then returns NaN
        return NaN;
    }
}

console.log(getAmountInCredits(1, 'isk isk'));
console.log(getAmountInCredits(2, 'isk isk'));
console.log(getAmountInCredits(3.14, 'isk isk'));
console.log(getAmountInCredits(1.2, 'isk vev'));
console.log(getAmountInCredits(1.2, 'isk not'));
