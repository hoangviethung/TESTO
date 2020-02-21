import Cookie from "./lib/Cookie";
import Loading from "./lib/Loading";
function aboutMember(){
	var swiper = new Swiper('.member-slide', {
		centeredSlides: true,
		slidesPerView: 3,
		speed: 1000,
		loop: true,
		autoplay: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			375:{
				slidesPerView: 1,
				spaceBetween: 10,
			}
		},
	  });
}
function newBanner(){
	var swiper = new Swiper('.new-promotion, .tuyen-dung', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		  },
		centeredSlides: true,
		speed: 1000,
		loop: true,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
document.addEventListener('DOMContentLoaded', () => {
	Loading();
	aboutMember();
	newBanner();
	fancyboxVideo();
});