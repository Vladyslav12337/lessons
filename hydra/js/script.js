
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




const choiseSlider = document.querySelector('.info')

if(choiseSlider){
const swiper = new Swiper('.info', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	centeredSlides: true,
	autoHeight: true,
	// If we need pagination
	pagination: {
	el: '.swiper-pagination',
	},


	// Navigation arrows
	navigation: {
	nextEl: '.info__arrow--next',
	prevEl: '.info__arrow--prev',
	},



	// And if we need scrollbar
	scrollbar: {
	el: '.swiper-scrollbar',
	},
});
}



