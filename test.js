// jqeury처럼 $ 쓰기
function a (dom) {
  let dom = document.querySelector(`${dom}`);
  return console.log(`${dom}`);
}

// a('#e_name');

// a('#e_name').addEventListener('click',function(){
//   alert('성공');
// })