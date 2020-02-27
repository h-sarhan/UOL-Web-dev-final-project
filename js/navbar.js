// This variable is an array representing all the navbar__link DOM objects
var navbarLinks = document.querySelectorAll('.navbar__link');
// This is an array of colors
var colors = ['#2980b9', '#2ecc71', '#d35400', '#5758BB'];

var navbarExpand = document.querySelector('.navbar__expand');
var showNav = navbarExpand.querySelector('.show-nav');
var hideNav = navbarExpand.querySelector('.hide-nav');
// This is the default background
var defaultBackground = '';

// This loops through each navbar link and adds two event listeners.
// The first event listener changes the background of the link to the appropriate color
// when the mouse is over the link.
// The second event listener changes the background back to the default
// whenever the mouse leaves the area the link occupies.
navbarLinks.forEach((link, idx) => {
  link.addEventListener('mouseenter', () => {
    link.style.background = colors[idx];
  });

  link.addEventListener('mouseleave', () => {
    link.style.background = defaultBackground;
  });
});

if (screen.width < 800) {
  navbarExpand.addEventListener('click', function () {
    navbarLinks.forEach((link, idx) => {
      link.classList.toggle('collapsed');
    })
    navbarLinks[0].classList.remove('collapsed');
    navbarLinks[0].classList.toggle('bottom-border');
    showNav.classList.toggle('collapsed');
    hideNav.classList.toggle('collapsed');

  });
}