
function a(){
  global.luckyuNumber = 23
}

function b(){
  global.luckyuNumber = 42
}

a();
b();


// let b = a > 3 ? 'aa' : 'bb';
// console.log(b);
let sayHello = (name) => console.log('Hello', name);
let func = () => {console.log('aa')};