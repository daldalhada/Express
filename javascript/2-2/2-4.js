if (true) {
    var x = 3;
}

console.log(x);  // 3

if (true) {
    const y = 3;
}

console.log(y);  // error(y is not defined)

const a = 3;
a = 5;  // error

const b = { name: 'daldal'};
b.name = 'daldalhada';  // OK

let b = 3;
b = 5;  // OK