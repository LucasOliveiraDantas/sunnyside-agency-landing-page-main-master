const btn = document.querySelector('.header .container-nav .bx-menu')
const menu = document.querySelector('.header .container-nav .menu-links')

btn.addEventListener('click', function () {
  menu.classList.toggle('show')
})
