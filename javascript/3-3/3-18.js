setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버 고장!');
    } catch (err) {
        console.error(err);
    }
}, 1000);

const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcd.js', (err) => {
        if(err) {
            console.error(err);
        }
    })
}, 1000);