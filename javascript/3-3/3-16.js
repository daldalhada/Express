const fs = require('fs').promises;

fs.writeFile('./javascript/3-3/createFile.txt', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('./javascript/3-3/createFile.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });