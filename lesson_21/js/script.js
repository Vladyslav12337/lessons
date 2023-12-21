
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
document.documentElement.classList.toggle('menu-open');
});


const search = document.querySelector('.search');
if (search) {
document.addEventListener("click", function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.search__icon')) {
      search.classList.add('search__open');
   } else if (!targetElement.closest('.search')) {
      search.classList.remove('search__open');
   }
});
};