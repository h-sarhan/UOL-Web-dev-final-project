function switchBackground() {
  carousel.style.background = "url('" + images[currentImage] + "')";
  carousel.style.backgroundSize = 'cover';
  carousel.style.backgroundPosition = 'center';
  caption.textContent = captions[currentImage];
}
function mod(n, m) {
  return ((n % m) + m) % m;
}
var carousel = document.querySelector('.info-right');
var caption = document.querySelector('.info-right__caption');
var btns = document.querySelector('.info-right__btns');
var leftBtn = btns.children[0];
var rightBtn = btns.children[1];

var images = [
  '../images/Slideshow Images/cristina-gottardi-boxam4k4rQw-unsplash.jpg',
  '../images/Slideshow Images/lochlainn-riordan-G6CR8v_bts0-unsplash.jpg',
  '../images/82687168_1006968263021574_2332176493087555584_o.jpg',
];

var captions = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, commodi?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, commodi?',
  'A group photo right after one one of our yoga events',
];

var currentImage = Math.floor(Math.random() * images.length);

switchBackground();

leftBtn.addEventListener('click', function() {
  currentImage = mod(currentImage - 1, images.length);
  console.log(currentImage);
  switchBackground();
});

rightBtn.addEventListener('click', function() {
  currentImage = mod(currentImage + 1, images.length);
  console.log(currentImage);
  switchBackground();
});
