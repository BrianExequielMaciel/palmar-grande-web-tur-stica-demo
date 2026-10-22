const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id], main article[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

function sendMessage(event) {
  event.preventDefault();
  const status = document.querySelector('.form-status');
  status.textContent = '¡Gracias! Tu mensaje quedó preparado para ser conectado a un correo o formulario real.';
  event.target.reset();
  return false;
}

function subscribe(event) {
  event.preventDefault();
  const button = event.target.querySelector('button');
  button.textContent = '¡Listo!';
  event.target.reset();
  return false;
}
