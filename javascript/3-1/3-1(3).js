const { odd, even } = require('./3-1(1)');
const checkNumber = require('./3-1(2)');

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(11));
console.log(checkStringOddOrEven('daldalhada'));