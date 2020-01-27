var navbarLinks = document.querySelectorAll('.navbar__link');
var colors = ['#2980b9', '#2ecc71', '#d35400'];

var defaultBackground = '';
navbarLinks.forEach((link, idx) => {
  link.addEventListener('mouseenter', () => {
    link.style.background = colors[idx];
  });

  link.addEventListener('mouseleave', () => {
    link.style.background = defaultBackground;
  });
});
