const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});
