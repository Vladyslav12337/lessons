
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




