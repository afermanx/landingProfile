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
