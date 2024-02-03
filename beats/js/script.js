


/*const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});*/


const choiseSlider = document.querySelector('.choise')

if(choiseSlider){
const swiper = new Swiper('.choise', {
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
	nextEl: '.choise__arrow--next',
	prevEl: '.choise__arrow--prev',
	},

	// And if we need scrollbar
	scrollbar: {
	el: '.swiper-scrollbar',
	},
});
}


