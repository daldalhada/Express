const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log(crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));
console.log(crypto.createHash('sha512').update('다른 비밀번호').digest('hex'));


// pdkdf2

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password: ', key.toString('base64'));
    });
});