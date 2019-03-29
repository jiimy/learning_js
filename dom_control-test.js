// js 모듈화
// 돔 컨트롤에 용이하게 모듈화하기


(function () {
  // var $header = document.querySelector("header");
  // $header.addEventListener('click', function () {
  //   console.log('헤더클릭');
  // })

  // headerctrol = (function () {
  //   console.log('header');

  //   // return console.log(header);

  // }());

  // var footer = (function () {
  //   return console.log('푸터');
  // })
var cols = document.querySelectorAll('#cols .btn'); 
 
[].forEach.call(cols,function(col){
    col.addEventListener("click",click,false);
});


}());

