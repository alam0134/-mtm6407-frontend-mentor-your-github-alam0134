// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.querySelector('.nav-close');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-list a');

  // Open menu
  menuToggle.addEventListener('click', function() {
    navMenu.classList.add('active');
    overlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
  });

  // Close menu
  function closeMenu() {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  // Close menu button
  navClose.addEventListener('click', closeMenu);

  // Close menu when overlay is clicked
  overlay.addEventListener('click', closeMenu);

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});
