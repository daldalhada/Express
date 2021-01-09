const express = require('express');
const path = require('path');

const app = express();

// 서버에 port라는 속성을 삽입(전역변수의 역할)
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log('모든 요청에 실행');
    next();
})

app.get('/', (req, res) => {
    //res.sendFile('./index.html)
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/category/javascript', (req, res) => {
    res.send(`hello javascript`);
});

app.get('/category/java', (req, res) => {
    res.send(`hello java`);
});

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

app.get('*', (req, res) => {
    res.send('hello everyday');
})

app.listen(app.get('port'), () => {
    console.log('express server on');
})