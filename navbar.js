var navbarLinks = document.querySelectorAll('.navbar__link');
var colors = [
  '#ff9ff3',
  '#feca57',
  '#ee5253',
  '#48dbfb',
  '#1dd1a1',
  '#00d2d3',
  '#2e86de',
  '#5f27cd',
  '#8395a7',
  '#222f3e',
];
var defaultBackground =
  'radial-gradient(circle, rgba(253, 187, 45, 1) 0%, rgb(222, 126, 15) 100%)';

navbarLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    var r = Math.floor(Math.random() * colors.length);
    link.style.background = colors[r];
  });
  link.addEventListener('mouseout', () => {
    link.style.background = defaultBackground;
  });
});

// console.log(navbarLinks);
