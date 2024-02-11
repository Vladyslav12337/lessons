
/*document.addEventListener('DOMContentLoaded', function () {
	const parentElement = document.querySelector('.ship-header__close');

	parentElement.addEventListener('click', function () {
		 const listTestElements = document.querySelectorAll('.ship-header');
		 listTestElements.forEach(function (listTestElement) {
			  listTestElement.classList.toggle('open');
		 });
	});
});*/


const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});







let _slideUp = (target, duration = 500) => {
	// your slideUp function
};

let _slideDown = (target, duration = 500) => {
	// your slideDown function
};

let _slideToggle = (target, duration = 500) => {
	// your slideToggle function
};




const choiseSlider = document.querySelector('.info');

if (choiseSlider) {
	const swiper = new Swiper('.info', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		slidesPerView: 1,

		// Breakpoints
		breakpoints: {
			// При ширине экрана больше 580px
			580: {
				slidesPerView: 2,
			},
			// При ширине экрана меньше 580px
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.info__arrow--next',
			prevEl: '.info__arrow--prev',
		},
	});
}


const categorySlider = document.querySelector('.choise');

if (categorySlider) {
	const swiper = new Swiper('.choise', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 11,

		breakpoints: {
			// При ширине экрана больше 580px
			550: {
				slidesPerView: 2,
			},
			// При ширине экрана меньше 580px
			750: {
				slidesPerView: 3,
			},
			881: {
				slidesPerView: 4,
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.choise__arrow--next',
			prevEl: '.choise__arrow--prev',
		},
	});
}

const variantSlider = document.querySelector('.variant');

if (variantSlider) {
	const swiper = new Swiper('.variant', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 11,

		breakpoints: {
			// При ширине экрана больше 580px
			550: {
				slidesPerView: 2,
			},
			// При ширине экрана меньше 580px
			750: {
				slidesPerView: 3,
			},
			881: {
				slidesPerView: 4,
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.variant__arrow--next',
			prevEl: '.variant__arrow--prev',
		},
	});
}

const buildSlider = document.querySelector('.build');

if (variantSlider) {
	const swiper = new Swiper('.build', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 20,

		breakpoints: {
			// При ширине экрана больше 580px
			375: {
				slidesPerView: 2,
			},
			// При ширине экрана меньше 580px
			750: {
				slidesPerView: 3,
			},

		},

		// Navigation arrows
		navigation: {
			nextEl: '.build__arrow--next',
			prevEl: '.build__arrow--prev',
		},
	});
}




