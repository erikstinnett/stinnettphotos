const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {        //Listens for a click
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});