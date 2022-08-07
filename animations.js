// Animaciones

// Menu Mobile

const hambMenu = document.querySelector('.hamb-menu-btn');
const menuList = document.querySelector('.nav--list-menu');
const closeMenu = document.querySelector('.close-menu');

hambMenu.addEventListener('click', () => {
    menuList.classList.add('show-menu');
})

closeMenu.addEventListener('click', () => {
    menuList.classList.remove('show-menu');
})
