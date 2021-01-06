const value = require('./3-1(1)');
console.log(value);     // {odd: '홀수', even: '짝수'}

const {odd, even} = require('./3-1(1)');
console.log(odd, even); // 홀수 짝수

function checkOddOrEven(number) {
    if(number % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;
