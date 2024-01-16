'use strict'

/*const bodyElement = document.body
console.log(bodyElement)*/


//Обьявляем функцию с именем addListToBod. Эта функция принимает один параметр Итем (по умолчанию 5)
/*function addListToBody(itemCount = 5) {
	//получаем доступ к боди
	const body = document.body
	//Создаем елемент ul
	const ulElement = document.createElement ('ul')

	//Используем цикл что бы создать указанноe кол-во элементов li
	//потом добавляем li в ul 
	for (let i = 1; i<= itemCount; ++i ) {
		const liElement = document.createElement ('li')
		
		liElement.textContent = `Item ${i}`
		ulElement.appendChild(liElement)
	}
	//добавляем ul к body
	body.appendChild(ulElement)
}
//Вызываем функцию дважды один раз со значением по умолчанию, и один раз со значением 3
addListToBody()
addListToBody(3)
	*/
	



	document.body.classList.add('loaded')
	if (document.body.classList.contains('loaded')){
		document.body.style.color = 'green'
	}

	
	
	const items = document.querySelectorAll('.item')
	//Дальше перербор каждого елемента  добавление класса и изменение контента
	items.forEach((item, index) => {
		item.classList.add('active')
		item.textContent = `Елемент №${index + 1}`
	})
	

	const button = document.querySelector('.button')
	button.scrollIntoView({ behavior: 'smooth', block: 'center'})




const link = document.querySelector('.link')
link.setAttribute('data-value','100')
const dataValue = link.getAttribute('data-value')
if (parseInt(dataValue) < 200) {
	link.style.color = 'red'
}