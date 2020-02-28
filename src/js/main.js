import Cookie from "./lib/Cookie";
import Loading from "./lib/Loading";

// SLIDER HERE !!!
const homeSlider = () => {
	var swiper = new Swiper('.main-page-slider .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		grabCursor: true,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		pagination: {
			el: '.main-page-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		on: {
			progress: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".swiper-inner").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},
			touchStart: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function(speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".swiper-inner").style.transition =
						speed + "ms";
				}
			}
		}
	})
}

// SLIDER SẢN PHẨM TRANG CHỦ
const homeProductSlider = () => {
	var swiper = new Swiper('.home-product .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.home-product .swiper-button-next',
			prevEl: '.home-product .swiper-button-prev',
		},
		breakpoints: {
			1440: {
				slidesPerView: 4,
			},
			1100: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			}
		},
	})
}

// HEADER HERE !!!
const activeHeaderWhenScroll = () => {
	const heightHeader = document.querySelector('header').offsetHeight;
	window.addEventListener('scroll', function() {
		if (window.pageYOffset >= heightHeader) {
			document.querySelector('header').classList.add('scrolled');
		} else {
			document.querySelector('header').classList.remove('scrolled');
		}
	})
}

const toggleMenuMobile = () => {

	$('.toggle-menu.mobile').on('click', function() {
		$(this).toggleClass('active');
		$(this).siblings('.main-nav').toggleClass('active');
		$('body').toggleClass('disabled')
		$('#overlay').toggleClass('active');
	});

	$('#overlay').on('click', function() {
		$(this).removeClass('active');
		$('body').removeClass('disabled')
		$('.main-nav').removeClass('active');
		$('.toggle-menu.mobile').removeClass('active');
	})
}

// CHECK LAYOUT CÓ BANNER KHÔNG
const checkLayoutBanner = () => {
	const mainSlider = $('.main-page-slider');
	const breadcrumb = $('#breadcrumb-wrapper');
	const heightHeader = $('header').outerHeight();
	if (mainSlider.length >= 1 && mainSlider.css('display') == 'block') {
		mainSlider.css('padding-top', heightHeader);
	} else if (breadcrumb.length >= 1 && breadcrumb.css('display') == 'block') {
		breadcrumb.css('padding-top', heightHeader);
	} else {
		$('main').css('padding-top', heightHeader);
	}
}

const filterMobile = () => {
	$('.mobile-filter-open').on('click', function() {
		$(this).siblings('.filter-option-parent').find('.filter-option-container').slideToggle();
		$(this).siblings('.filter-option-parent').find('.filter-option-container .filter-option .filter-entries').slideUp();
	});

	$('.option-title').on('click', function() {
		$(this).siblings('.filter-entries').slideToggle();
		$('.option-title').not(this).siblings('.filter-entries').slideUp();
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Loading();
	// SLIDER HERE !!!
	homeSlider();
	homeProductSlider();
	// HEADER HERE !!!
	activeHeaderWhenScroll();
	// CHECK BANNER IN LAYOUT
	checkLayoutBanner();
	toggleMenuMobile();
	// FILTER MOBILE
	filterMobile();
});