const fs = require('fs');

fs.readFile('./javascript/3-3/readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});


// Promise 기능 지원
const fs = require('fs').promises;

fs.readFile('./javascript/3-3/readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });