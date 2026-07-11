
const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mainNav.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-filter]').forEach(filterLink => {
  filterLink.addEventListener('click', () => {
    const filter = filterLink.dataset.filter;
    document.querySelectorAll('.release-card').forEach(card => {
      const genre = card.dataset.genre;
      card.classList.toggle('is-hidden', filter !== 'all' && genre !== filter);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
