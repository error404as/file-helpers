
(function($){


$(function(){

	// http://dimsemenov.com/plugins/magnific-popup/
	if(typeof $.fn.magnificPopup === 'function'){
		$('.video-thumb').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,
			
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});
	}

	// http://kenwheeler.github.io/slick/
	$('.carousel').each(function(){
		if(typeof $.fn.slick === 'function'){
			$(this).find('> ul').slick({
				dots: true,
				infinite: false,
				slidesToShow: 6,
				slidesToScroll: 6,
				appendArrows: $(this).find('.carousel-nav'),
				appendDots: $(this).find('.carousel-nav'),
				prevArrow: '<div class="slick-prev">&lt;</div>',
				nextArrow: '<div class="slick-next">&gt;</div>',
				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 780,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 601,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							dots: false
						}
					},
					{
						breakpoint: 490,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: false
						}
					}
				]
			});
		}
	});

});

})(jQuery);

/*
 * smoothscroll polyfill - v0.3.3
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */
 // for window.scroll({ top: 300, behavior: 'smooth' });
!function(a,b,c){"use strict";function d(){function h(a,b){this.scrollLeft=a,this.scrollTop=b}function i(a){return.5*(1-Math.cos(Math.PI*a))}function j(a){if("object"!=typeof a||a.behavior===c||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"==typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior not valid")}function k(a){do a=a.parentNode;while(a!==b.body&&!(a.clientHeight<a.scrollHeight||a.clientWidth<a.scrollWidth));return a}function l(b){b.frame=a.requestAnimationFrame(l.bind(a,b));var d,f,h,c=g(),j=(c-b.startTime)/e;return j=j>1?1:j,d=i(j),f=b.startX+(b.x-b.startX)*d,h=b.startY+(b.y-b.startY)*d,b.method.call(b.scrollable,f,h),f===b.x&&h===b.y?void a.cancelAnimationFrame(b.frame):void 0}function m(c,d,e){var i,j,k,m,o,n=g();c===b.body?(i=a,j=a.scrollX||a.pageXOffset,k=a.scrollY||a.pageYOffset,m=f.scroll):(i=c,j=c.scrollLeft,k=c.scrollTop,m=h),o&&a.cancelAnimationFrame(o),l({scrollable:i,method:m,startTime:n,startX:j,startY:k,x:d,y:e,frame:o})}if(!("scrollBehavior"in b.documentElement.style)){var d=a.HTMLElement||a.Element,e=468,f={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,scrollIntoView:d.prototype.scrollIntoView},g=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now;a.scroll=a.scrollTo=function(){return j(arguments[0])?void f.scroll.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void m.call(a,b.body,~~arguments[0].left,~~arguments[0].top)},a.scrollBy=function(){return j(arguments[0])?void f.scrollBy.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void m.call(a,b.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset))},d.prototype.scrollIntoView=function(){if(j(arguments[0]))return void f.scrollIntoView.call(this,arguments[0]||!0);var c=k(this),d=c.getBoundingClientRect(),e=this.getBoundingClientRect();c!==b.body?(m.call(this,c,c.scrollLeft+e.left-d.left,c.scrollTop+e.top-d.top),a.scrollBy({left:d.left,top:d.top,behavior:"smooth"})):a.scrollBy({left:e.left,top:e.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:d}:d()}(window,document);
