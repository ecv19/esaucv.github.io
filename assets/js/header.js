let open = false;
const header = document.querySelector('header');
const nav = document.querySelector('nav#menu');
const toggle = document.querySelector('button#menu-toggle');

toggle.addEventListener('click', () => {
  open = !open;
  header.setAttribute('data-active', open);
  nav.setAttribute('data-active', open);
});
