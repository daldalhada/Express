function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'JS';
            return user.svae();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
            //생략
        })
        .catch((err) => {
            console.log(err);
        })
}


// Primise Hell 구출
async function findAndSaveUser(Users) {
    let user = await Users.findOne({});
    user.name = 'JS';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    //생략
}


const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();