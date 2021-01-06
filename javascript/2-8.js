// 기존 Funtcion() {}

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);     // zero, nero ...
            console.log(this.name, friend);     // undefined nero ...
        });
    },
};

relationship1.logFriends();


// 화살표 함수

var relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};

relationship2.logFriends();


// 기존 function 함수와  화살표 함수

button.addEventListener('click', function(){
    console.log(this.textContent);
});

button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});