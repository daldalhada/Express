const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

// 서버에 port라는 속성을 삽입(전역변수의 역할)
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));     // dev 대신 combined를 쓰면 더 자세해짐
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
    },
}));

app.use(express.json());    // bodyParser를 대체
app.use(express.urlencoded({ extended: true }));    // true면 qs, false면 querystring

app.use('/', indexRouter);
app.use('/user', userRouter);

const multer = require('multer');
const fs = require('fs');

// 서버 시작전에 uploads 폴더가 있는지 검색 후 없으면 생성
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, 'uploads/');
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },      // 5MB까지 허용
});

app.post('/upload', upload.fields([{ name: 'image1', limits: 5}, { name: 'image2' }, { name: 'image3' }]), (req, res) => {
    console.log(req.file);
    res.send('ok');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).sned(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})