var icons = document.querySelectorAll('.info__icons i');
var logo = document.querySelector('.info__logo');
var textBox = document.querySelector('.info__text');

var iconText = [
  'We are located at 123 Khalifa Street, Abu Dhabi, U.A.E.',
  'Our email address is: darkness2lightAD@gmail.com',
  'Join a community of a 1000+ people on our Facebook page',
  'Check out our Twitter for daily mental health tips',
  'We update our Instagram with pictures from all our events',
];
icons.forEach((el, idx) => {
  el.addEventListener('mouseover', () => {
    textBox.style.visibility = 'visible';
    textBox.textContent = iconText[idx];
  });
});
