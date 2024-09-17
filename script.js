const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon-o');
    icon.classList.add('fa-sun-o');
    toggleButton.title = 'Alternar para o modo claro';
  } else {
    icon.classList.remove('fa-sun-o');
    icon.classList.add('fa-moon-o');
    toggleButton.title = 'Alternar para o modo escuro';
  }
});
// botão flutuante para voltar ao topo
const backToTopButton = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
