'use strict'

    // Отримуємо всі елементи з класом "item"
   const items = document.querySelectorAll('.item');

    // Додаємо обробник події для кожного елемента
   items.forEach(item => {
      item.addEventListener('click', () => {
        // Перевіряємо наявність класу "active" і додаємо або видаляємо його
      item.classList.toggle('active');
      });
   });


	    // Додаємо клас "loaded" до body при повному завантаженні сторінки
		document.addEventListener('DOMContentLoaded', function () {
			document.body.classList.add('loaded');
		});


    // Отримуємо елементи header та footer
   const header = document.getElementById('header');
   const footer = document.getElementById('footer');

    // Додаємо обробники подій
   header.addEventListener('mouseover', () => {
      footer.style.backgroundColor = 'lightblue';
   });

   header.addEventListener('mouseout', () => {
      footer.style.backgroundColor = 'lightcoral';
   });

	
	document.addEventListener("DOMContentLoaded", function () {
		const element = document.querySelector('.element');
		const startValue = +element.getAttribute('data-start');
		const endValue = +element.getAttribute('data-end');
	
		let intervalId;
	
		function updateContent() {
		const currentValue = +element.textContent;
		if (currentValue < endValue) element.textContent = currentValue + 1;
		else clearInterval(intervalId);
		}
	
		function startInterval() {
		intervalId = setInterval(updateContent, 1000); 
		}
	
		const observer = new IntersectionObserver(entries => {
		const isVisible = entries[0].isIntersecting;
		if (isVisible && !intervalId) {
			startInterval();
			 observer.disconnect(); // Відключити спостерігач після старту інтервалу
		}
		});
	
		observer.observe(element);
	})

