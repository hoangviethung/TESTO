import Cookie from "./lib/Cookie";
import Loading from "./lib/Loading";
import Tab from "./lib/Tab";
import getSVG from "./lib/GetSVG"

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
			575: {
				slidesPerView: 2,
			}
		},
	})
}

const productOthersSlider = () => {
	var swiper = new Swiper('.slider-product-others .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 1000,
		simulateTouch: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.slider-product-others .swiper-button-next',
			prevEl: '.slider-product-others .swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1440: {
				slidesPerView: 2,
				spaceBetween: 35,
			}
		},
	})
}

const setHeightThumbnailSliderProductDetail = () => {
	if (window.innerWidth > 575) {
		const heightReview = $('.slider-product-detail .review-image img').height();
		$('.thumbnail-image').css('height', heightReview);
	}
}

const produdctDetailSlider = () => {
	var thumbnail = new Swiper('.slider-product-detail .thumbnail-image .swiper-container', {
		direction: 'horizontal',
		spaceBetween: 10,
		slidesPerView: 3,
		loop: true,
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.review-image .swiper-button-next',
			prevEl: '.review-image .swiper-button-prev',
		},
		breakpoints: {
			575.98: {
				direction: 'vertical',
			}
		}
	});

	var review = new Swiper('.slider-product-detail .review-image .swiper-container', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		spaceBetween: 10,
		loop: true,
		simulateTouch: false,
		loopedSlides: 3,
		thumbs: {
			swiper: thumbnail,
		},
		navigation: {
			nextEl: '.review-image .swiper-button-next',
			prevEl: '.review-image .swiper-button-prev',
		}
	});
}

const solutionSliderBlock3 = () => {
	var swiper = new Swiper('.slider-solution-detai-block-3 .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 1000,
		simulateTouch: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.slider-solution-detai-block-3 .swiper-button-next',
			prevEl: '.slider-solution-detai-block-3 .swiper-button-prev',
		},
		breakpoints: {
			575.98: {
				slidesPerView: 2,
				spaceBetween: 15,
			}
		}
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
		$('.sub-menu').removeClass('active');
	});

	$('#overlay').on('click', function() {
		$(this).removeClass('active');
		$('body').removeClass('disabled')
		$('.main-nav').removeClass('active');
		$('.sub-menu').removeClass('active');
		$('.toggle-menu.mobile').removeClass('active');
	})
}
// Form search
function search_form() {
	$('header').each(function() {
		$('.search').click(function(){
			$('.search-form').slideToggle(500);
		})
	})
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.search-form').slideUp();
        }
	});
}
const menuMutipLevel = () => {
	// THÊM CLASS HASSUB MENU
	$('.sub-menu').parent('.nav-item').addClass('has-sub');
	// LEVEL 1
	const lv1 = $('.main-nav .nav-list').children('.nav-item');
	lv1.addClass('level-1');
	// LEVEL 2
	const lv2 = $('.nav-item.has-sub.level-1').children('.sub-menu').children('.nav-item');
	lv2.addClass('level-2');
	// LEVEL 3
	const lv3 = $('.nav-item.has-sub.level-2').children('.sub-menu').children('.nav-item');
	lv3.addClass('level-3');
}

const menuMutipLevelMobile = () => {
	$('.has-sub').on('click', function(e) {
		e.stopPropagation();
		$(e.currentTarget).children('.sub-menu').addClass('active');
	});

	$('.back').on('click', function(e) {
		e.stopPropagation();
		$(e.currentTarget).closest('.sub-menu').removeClass('active');
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
	if (window.innerWidth < 1025) {
		$('.mobile-filter-open').on('click', function() {
			$(this).find('.filter-down').toggleClass('active-filter');
			$(this).siblings('.filter-option-parent').find('.filter-option-container').slideToggle();
			$(this).siblings('.filter-option-parent').find('.filter-option-container .filter-option .filter-entries').slideUp();
		});
		$('.filter-option').on('click', function(){
			$(this).find('.filter-down').toggleClass('active-filter');
			$(this).find('.option-title').siblings('.filter-entries').slideToggle();
			$('.filter-option').not(this).siblings('.filter-entries').slideUp();
			});
	}
}

const tabProductDetailMobile = () => {
	if (window.innerWidth < 1025) {
		$('.mobile-list-tab-open').on('click', function() {
			$(this).siblings('.block-tab-information-detail').find('.list-tab').slideToggle();
		});
	}
}

const setHeightOverFolowBySomeElement = () => {
	const heightGet = $('[data-getHeight]').height();
	const heightSet = $('[data-setHeight]');
	const responsive = heightSet.attr('data-setHeight');
	if (window.innerWidth > responsive) {
		heightSet.css('max-height', heightGet)
	}
}

function aboutMember() {
	var swiper = new Swiper('.member-slide', {
		centeredSlides: true,
		slidesPerView: 4,
		speed: 1000,
		loop: true,
		autoplay: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			767: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			576:{
				slidesPerView: 3,
				spaceBetween:10,
			},
			375: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		},
	});
}

function newBanner() {
	var swiper = new Swiper('.new-slide, .hr, .download-softwaer', {
		speed: 1000,
		loop: true,
		spaceBetween: 0,
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

function ajaxForm() {
	$('form button').on('click', function(e) {
		e.preventDefault();
		const url = $(this).attr('data-url');
		const name = $('#name').val();
		const phone = $('#phone').val();
		const email = $('#email').val();
		const content = $('#content').val();
		$.ajax({
			type: "POST",
			url: url,
			data: {
				url: url,
				name: name,
				phone: phone,
				email: email,
				content: content
			},
			success: function(res) {
				if (res.Code === 200) {
					alert('Thành công');
				} else {
					alert('Thất bại');
				}
			}
		});
	});
}

function responText() {
	$(window).resize(function() {
		var width = $(window).width();
		if (width < 658) {
			$('.nb-1, .nb-4').find('.text-content').css({
				display: "none"
			});
		} else {
			$('.nb-1, .nb-4').find('.text-content').css({
				display: "block"
			});
		}
	});
}

function showBackToTop() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').addClass('active');
		} else {
			$('#back-to-top').removeClass('active');
		}
	});

	$("#back-to-top").on("click", function(e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	getSVG();
	Loading().then(() => {
		new WOW().init();
		setHeightThumbnailSliderProductDetail();
		// GET HEIGHT SOMWE ELEMENT
		setHeightOverFolowBySomeElement();
	});
	// SLIDER HERE !!!
	homeSlider();
	homeProductSlider();
	productOthersSlider();
	produdctDetailSlider();
	solutionSliderBlock3();
	setHeightThumbnailSliderProductDetail();
	// HEADER HERE !!!
	activeHeaderWhenScroll();
	menuMutipLevel();
	menuMutipLevelMobile();
	// CHECK BANNER IN LAYOUT
	checkLayoutBanner();
	toggleMenuMobile();
	// FILTER MOBILE
	filterMobile();
	// TAB PRODUCT DETAIL MOBILE
	tabProductDetailMobile();
	// TAB
	const tabInformationDetail = new Tab('.block-tab-information-detail');
	// HOÀNG JS
	aboutMember();
	newBanner();
	ajaxForm();
	responText();
	showBackToTop();
	search_form();
});

window.addEventListener("resize", () => {
	setHeightOverFolowBySomeElement();
	setHeightThumbnailSliderProductDetail();
	checkLayoutBanner();
});