import Cookie from "./lib/Cookie";
import Loading from "./lib/Loading";

const homeSlider = () => {
    var swiper = new Swiper('.home-slider .swiper-container', {
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
            el: '.home-slider .swiper-pagination',
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

function aboutMember() {
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
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
    });
}

function newBanner() {
    var swiper = new Swiper('.new-slide, .hr', {
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

function responText() {
    $(window).resize(function() {
        var width = $(window).width();
        if (width < 658) {
            $('.nb-1, .nb-4').find('.text-content').css({ display: "none" });
        } else {
            $('.nb-1, .nb-4').find('.text-content').css({ display: "block" });
        }
    });
}
function ajaxForm() {
	$('.form-group button').on('click', function(e) {
		e.preventDefault();
		const url = $(this).attr('data-url');
		const name = $('#name').val();
		const phone = $('#phone').val();
		const email = $('#email').val();
		$.ajax({
			type: "POST",
			url: url,
			data: {
				url: url,
				name: name,
				phone: phone,
				email: email
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
document.addEventListener('DOMContentLoaded', () => {
    Loading();
    // SLIDER HERE !!!
    homeSlider();
    homeProductSlider();
    newBanner();
    aboutMember();
    responText();
    activeHeaderWhenScroll();
    ajaxForm()
});