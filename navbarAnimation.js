navAnimation();

function navAnimation() {
  const navToggleButton = document.querySelector('#nav-toggle'),
    navbar = document.querySelector('#nav-bar'),
    logo = document.querySelector('#logo');

  navToggleButton.addEventListener('click', () => {
    if (navbar.classList.contains('visible')) {
      navbar.classList.remove('visible');
      logo.classList.remove('visible');
    } else {
      navbar.classList.add('visible');
      logo.classList.add('visible');
    }
  });
}
