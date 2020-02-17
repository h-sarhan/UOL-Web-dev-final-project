// This variable is an array representing all the navbar__link DOM objects
var navbarLinks = document.querySelectorAll('.navbar__link');
// This is an array of colors
var colors = ['#2980b9', '#2ecc71', '#d35400'];

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