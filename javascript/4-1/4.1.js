const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello daldalhada</p>');
}).listen(8080, () => {
    console.log('8080 포트 서버 실행');
});