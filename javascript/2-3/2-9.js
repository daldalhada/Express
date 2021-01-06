const example = { a: 123, b: { c: 135, d: 146}}

//EX2015+ 전

const a = example.a;
const b = example.b.d;

//EX2015+ 후

const { a, b: { d } } = example;


arr = [1, 2, 3, 4, 5];

//EX2015+ 전
const x = arr[0];
const y = arr[1];
const z = arr[4];

//EX2015+ 후
const [x, y, , , z] = arr;