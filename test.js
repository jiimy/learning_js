// jqeury처럼 $ 쓰기
// function a (dom) {
//   let dom = document.querySelector(`${dom}`);
//   return console.log(`${dom}`);
// }

// a('#e_name').addEventListener('click',function(){
//   alert('성공');
// })

function $(selector){
	if ( ! (this instanceof $) ){
		return new $(selector);
	}
	this.selector = document.querySelector(selector);
	return this;
}
$.fn = $.prototype;
$.fn.css = function(type, val) {
    const isStyle = this.selector.getAttribute('style');
    if (isStyle) {
        this.selector.setAttribute('style', [isStyle, ';',type, ':', val].join(''))
    } else {
        this.selector.setAttribute('style', [type, ':', val].join(''));
    }
    return this;
}
let el = $('.test');
console.log(el);

$('.test').css('display', 'block').css('color', 'red').css('width', '200px');
