//앞으로의 js테스트는 이 폴더에서 한다


// function a() {
//   global.luckyuNumber = 23
// }

// function b() {
//   global.luckyuNumber = 42
// }

// a();
// b();



// ==========
// 3항 연산자
// ==========
let number1 = 4;
let returnN = number1 > 3 ? 'true' : 'false';
console.log(returnN);
// 리턴값을 반환


// ==========
// arrow function
// ==========
var name = 2;
let sayHello = (name) => console.log('Hello', name);
sayHello();

let func = () => { console.log('aa') };
func();