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

// Register Modal

const registerModal = document.querySelector('.register');
const showRegister = document.querySelector('.show-register');
const closeRegister = document.querySelector('.close-register');

showRegister.addEventListener('click', () => {
    registerModal.classList.add('show-register');
    menuList.classList.remove('show-menu');
})

closeRegister.addEventListener('click', () => {
    registerModal.classList.remove('show-register');
})

