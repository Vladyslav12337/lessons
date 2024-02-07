
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


const choiseSlider = document.querySelector('.swiper')

if(choiseSlider){
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	centeredSlides: true,
	autoHeight: true,
	// If we need pagination


	// Navigation arrows
	navigation: {
	nextEl: '.info__arrow--next',
	prevEl: '.info__arrow--prev',
	},

});
}

