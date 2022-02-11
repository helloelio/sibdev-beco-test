const defaultNavigationMenu = document.querySelector('#sidebar');
const mobileNavigationMenu = document.querySelector('#sidebar-mobile');
const navButton = document.querySelector('.nav__button');

const header = document.querySelector('.main__header');
const cards = document.querySelector('.cards');

setTimeout(() => {
  navButton.addEventListener(
    'click',
    () => {
      mobileNavigationMenu.classList.toggle('sidebar-mobile-opened');
      navButton.classList.toggle('opened');
      navButton.classList[1] === 'opened'
        ? (navButton.textContent = 'X')
        : (navButton.textContent = '|||');
    },
    100
  );
});

window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  if (scroll >= 75) {
    header.classList.add('scrolled');
    cards.classList.add('cards-scrolled');
  } else {
    header.classList.remove('scrolled');
    cards.classList.remove('cards-scrolled');
  }
});
