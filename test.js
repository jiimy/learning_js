//*-------  jqeury처럼 $ 쓰기
// dom 선택
function $(...dom) {
  // 여러개의 dom 받을 경우
  var split = dom[0].split(',');
  console.log('분할'+split[0], split[1]);
  // console.log(split.length);
  if(split.length > 1){
    for ( i in split){
      console.log(split[i]);
      var domSelect = document.querySelector(split[i]);
    }
  }
  var domSelect = document.querySelector(dom);
  return domSelect;
}

// css변경
// addClass, removeClass, toggleClass
$('.test, .test2').addEventListener('click', function(){
  console.log('click');
});
// $('.test2').addEventListener('click',function(){
//   console.log('click2');
// })

// $('.test, .test2').click(function(){
//   console.log('click');
// })


// $셀렉터로 css운용하기
// function $(selector) {
//   if (!(this instanceof $)) {
//     return new $(selector);
//   }
//   this.selector = document.querySelector(selector);
//   return this;
// }
// $.fn = $.prototype;
// $.fn.css = function (type, val) {
//   const isStyle = this.selector.getAttribute("style");
//   if (isStyle) {
//     this.selector.setAttribute(
//       "style",
//       [isStyle, ";", type, ":", val].join("")
//     );
//   } else {
//     this.selector.setAttribute("style", [type, ":", val].join(""));
//   }
//   return this;
// };
// let el = $(".test");
// console.log(el);

// $(".test")
//   .css("display", "block")
//   .css("color", "red")
//   .css("width", "200px");
