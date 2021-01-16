const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

// 테스트 실행 전 sequelize 세팅
beforeAll(async () => {
    await sequelize.sync();
});

describe('POST /login', () => {
    test('회원 가입', (done) => {
        request(app)
            .post('/auth/join')
            .send({
                email: 'ssen1994@naver.com',
                password: 'daldal',
                nick: 'daldal',
            })
            .expect('Location', '/')
            .expect(302, done)
    })
});

describe('POST /login', () => {
    test('로그인 수행', async (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'ssen1994@naver.com',
                password: 'daldal'
            })
            .expect('Location', '/')
            .expect(302, done);
    })
});

afterAll(async () => {
    await sequelize.sync( { force: true });
});