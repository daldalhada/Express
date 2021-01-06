/*
    EX2015+ 전
*/

var Human = function(type) {
    this.type = type || 'human';
};

// 생성자 메서드(스태틱 메서드)
Human.isHuman = function(human) {
    return human instanceof Human;
}

// 인스턴스 메서드(프로토타입 메서드)
Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
}

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructir = Zero;      // 상속하는 부분
Zero.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'JS', 'Kim');
Human.isHuman(oldZero); // true



/*
    EX2015+ 후
*/

class Human {
    constructor(typpe = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'JS', 'Kim');
