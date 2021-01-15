const { addFollowing } = require('./user');
jest.mock('../models/user');
const User = require('../models/user');

describe('addFollowing', () => {
    const req = {
        user: { id: 1 },
        params: { id: 2 },
    };
    const res = {
        status: jest.fn(() => res),
        send: jest.fn(),
    };
    const next = jest.fn();
    test('User를 찾고 팔로잉을 추가하고 success를 응답', async () => {
        User.findOne.mockReturnValue(Promise.resolve({ 
            id: 1, name: 'daldal',
            addFollowings(value) {
                return Promise.resolve(true);
            }
    }));
        await addFollowing(req, res, next);
        expect(res.send).toBeCalledWith('success');
    });

    test('User를 찾지 못했을 때 404 코드와 함께 no user를 응답', async () => {
        User.findOne.mockReturnValue(Promise.resolve(null));
        await addFollowing(req, res, next);
        expect(res.status).toBeCalledWith(404);
        expect(res.send).toBeCalledWith('no user');
    })

    test('DB에서 에러 발생하면 next(error)를 호출', async () => {
        const error = '테스트용 에러';
        User.findOne.mockReturnValue(Promise.reject(error));
        await addFollowing(req, res, next);
        expect(next).toBeCalledWith(error);
    })
});