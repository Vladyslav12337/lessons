
document.addEventListener('DOMContentLoaded', function () {
	const parentElement = document.querySelector('.ship-header__close');

	parentElement.addEventListener('click', function () {
		 const listTestElements = document.querySelectorAll('.ship-header');
		 listTestElements.forEach(function (listTestElement) {
			  listTestElement.classList.toggle('open');
		 });
	});
});


const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});





const spollersArray = document.querySelectorAll('[data-spollers]');

if (spollersArray.length > 0) {
  // Получение обычных спойлеров
  const spollersRegular = Array.from(spollersArray).filter(item => !item.dataset.spollers.split(",")[0]);

  // Инициализация обычных спойлеров
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  }

  // Получение спойлеров с медиазапроссами
  const spollersMedia = Array.from(spollersArray).filter(item => item.dataset.spollers.split(",")[0]);

  // Инициализация спойлеров с медиа запросами
  if (spollersMedia.length > 0) {
    const breakpointsArray = [];
    spollersMedia.forEach(item => {
      const params = item.dataset.spollers;
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });

    // Получаем уник брейк-поинты
    let mediaQueries = breakpointsArray.map(item => `(${item.type}-width: ${item.value}px),${item.value},${item.type}`);
    mediaQueries = mediaQueries.filter((item, index, self) => self.indexOf(item) === index);

    // Работаем с каждым брейк поинтом
    mediaQueries.forEach(breakpoint => {
      const paramsArray = breakpoint.split(",");
      const mediaBreakpoint = paramsArray[1];
      const mediaType = paramsArray[2];
      const matchMedia = window.matchMedia(paramsArray[0]);

      // Объекты с нужными условиями
      const spollersArrayFiltered = breakpointsArray.filter(item => item.value === mediaBreakpoint && item.type === mediaType);

      // Событие
      matchMedia.addListener(() => {
        initSpollers(spollersArrayFiltered, matchMedia);
      });
      initSpollers(spollersArrayFiltered, matchMedia);
    });
  }

  // Инициализация
  function initSpollers(spollersArray, matchMedia = false) {
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove('_init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  }

  // Работа с контентом
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
    if (spollerTitles.length > 0) {
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');
          if (!spollerTitle.classList.contains('_active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }

  function setSpollerAction(e) {
    const el = e.target;
    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
          hideSpollerBody(spollersBlock);
        }
        spollerTitle.classList.toggle('_active');
        const spollerText = spollerTitle.nextElementSibling;
        spollerText.classList.toggle('hidden'); // toggle the 'hidden' class
        _slideToggle(spollerText, 500);
      }
      e.preventDefault();
    }
  }


  function hideSpollerBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove('_active');
      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  }
}

let _slideUp = (target, duration = 500) => {
  // your slideUp function
};

let _slideDown = (target, duration = 500) => {
  // your slideDown function
};

let _slideToggle = (target, duration = 500) => {
  // your slideToggle function
};

