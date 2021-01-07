const fs = require('fs');

let data = fs.readFileSync('./javascript/3-3/readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./javascript/3-3/readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./javascript/3-3/readme.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./javascript/3-3/readme.txt');
console.log('4번', data.toString());


async function main() {
    let data = await fs.readFileSync('./javascript/3-3/readme.txt');
    console.log('1번', data.toString());
    data = await fs.readFileSync('./javascript/3-3/readme.txt');
    console.log('2번', data.toString());
    data = await fs.readFileSync('./javascript/3-3/readme.txt');
    console.log('3번', data.toString());
    data = await fs.readFileSync('./javascript/3-3/readme.txt');
    console.log('4번', data.toString());
}
