const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// 서버에 port라는 속성을 삽입(전역변수의 역할)
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));     // dev 대신 combined를 쓰면 더 자세해짐
app.use(cookieParser('password'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'daldalhada',
    cookie: {
        httpOnly: true,
    },
}));
app.use(express.json());    // bodyParser를 대체
app.use(express.urlencoded({ extended: true }));    // true면 qs, false면 querystrin

app.get('/', (req, res) => {
    req.session.id = 'hello';
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