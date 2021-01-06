const path = require('path');

const string = __filename;

console.log(path.join(__dirname, '..', '/3-7.js'));
// c:\Users\daldalhada\Desktop\Express\javascript\3-7.js

console.log(path.resolve(__dirname, '..', '/3-8.js'));
// c:\3-8.js

console.log(path.dirname(string));
// c:\Users\daldalhada\Desktop\Express\javascript\3-2

console.log(path.extname(string));
// .js

console.log(path.basename(string));
// 3-8.js


console.log(path.parse(string));
/*
    {
        root: 'c:\', dir: 'c:\Users\daldalhada\Desktop\Express\javascript\3-2',
        base: '3-8.js',
        ext: '.js',
        name: '3-8'
    }
*/

console.log(path.format({
    dir: 'C:\\users\\daldalhada',
    name: 'path',
    ext: 'js',
}));
// C:\users\daldalhada\pathjs
