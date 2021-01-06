function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {            // 화살표 함수
    return x + y;
}

const add3 = (x, y) => x + y;       // 화살표 함수 축약

const add4 = (x, y) => (x + y);   


function not1(x) {
    return !x;
}

const not2 = (x) => !x;


// 주의: 자바스크립트 엔진이 해석을 못하는 경우

const obj = (x, y) => {x, y};        // 객체를 의미 하는지 함수의 body를 의미하는지

const obj = (x, y) => ({x, y});      // 객체를 바로 리턴하는 경우 소괄호 활용!