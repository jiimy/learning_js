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


// ==========
// 배열 
// ==========
// map
// var newArr = ["apple","tomato"].map( (value, index) => {
//   //index는 배열번호, value는 배열 값
//   return index + "번째 과일은 " + value + "입니다";
// });
// console.log(newArr)// 여러분들이 실행해보세요

function printmap(index, value) {
  return index + "번째 과일은 " + value + "입니다";
};
var map = ["apple", "tomato"].map(printmap);
console.log(map);


const widget = {
  "debug": "on",
  "window": {
    "title": "Sample Konfabulator Widget",
    "name": "main_window",
    "width": 500,
    "height": 500
  },
  "image": {
    "src": "Images/Sun.png",
    "name": "sun1",
    "hOffset": 250,
    "vOffset": 250,
    "alignment": "center"
  },
  "text": {
    "data": "Click Here",
    "size": 36,
    "style": "bold",
    "name": "text1",
    "hOffset": 250,
    "vOffset": 100,
    "alignment": "center",
    "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
  }
}

// console.log(widget);
console.log(widget.debug);
//객체만 따로 필터?

var pricedata = [100];

for (var i = 0; i < widget.length; i++) {
  console.log(widget.window);
}


/////////////////////
let number = [];
const keys = Object.keys(widget);

keys.forEach((key) => {
  if (typeof widget[key] === 'number') {
    number.push(key);
  }
  if (typeof widget[key] === 'object') {
    let ob_widget = Object.keys(widget[key]);
    // console.log(ob_widget);
    ob_widget.forEach((i) => {
      if (typeof widget[key][i] === 'number') {
        number.push(i);
      }
    })
  }
});
// console.log(number);


// console.log(a);
// a.forEach((value) => {
//   console.log(value);
// })
// console.log(widgetKey);

// widgetKey[0].forEach((value)=>{
//   console.log(value);
// })

