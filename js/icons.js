// This variable is an array of all the icons in the info-left part of the page
var icons = document.querySelectorAll('.info__icons i');
// This variable represents the text box that contains the information related to each icon.
// The text box is initially hidden
var textBox = document.querySelector('.info__text');

// This array contains information for each icon
var iconText = [
  'We are located at 123 Khalifa Street, Abu Dhabi, U.A.E.',
  'Our email address is: darkness2lightAD@gmail.com',
  'Join a community of a 1000+ people on our Facebook page',
  'Check out our Twitter for daily mental health tips',
  'We update our Instagram with pictures from all our events',
];

// This loops through each icon and adds an event listener to it.
// This event listener writes the appropriate text whenever the user hovers over an icon
icons.forEach((el, idx) => {
  el.addEventListener('mouseover', () => {
    textBox.style.visibility = 'visible';
    textBox.textContent = iconText[idx];
  });
});