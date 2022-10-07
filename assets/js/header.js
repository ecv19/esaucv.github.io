let open = false;
const nav = document.querySelector('nav#menu');
const toggle = document.querySelector('button#menu-toggle');

toggle.addEventListener('click', () => {
  open = !open;
  nav.setAttribute('data-active', open);
});
