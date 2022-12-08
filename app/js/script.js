const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const closeHamburger = document.querySelector('.close-hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  closeHamburger.classList.toggle('active');
})

closeHamburger.addEventListener('click', () => {
  navMenu.classList.remove('active');
  closeHamburger.classList.remove('active');
  hamburger.classList.remove('active');
})

document.querySelectorAll('.nav__list').forEach(
  link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      closeHamburger.classList.remove('active');
    })
  })


