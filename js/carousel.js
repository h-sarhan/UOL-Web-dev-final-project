// Helper function that changes the background of the carousel to the
// value of the variable "currentImage", and also changes the description
// of the image to the appropriate one
function switchBackground() {
  carousel.style.background = "url('" + images[currentImage] + "')";
  carousel.style.backgroundSize = 'cover';
  carousel.style.backgroundPosition = 'center';
  caption.textContent = captions[currentImage];
}
// Simple modulo script by StuR on StackOverflow.
// This helper function defines a modulo operation
// that behaves differently from JavaScript's native modulo operation
// when used with negative values
function mod(n, m) {
  return ((n % m) + m) % m;
}

// This variable represents the carousel DOM object
var carousel = document.querySelector('.info-right');
// This variable represents the carousel caption DOM object
var caption = document.querySelector('.info-right__caption');
// This variable represents the buttons of the carousel
var btns = document.querySelector('.info-right__btns');
// This variable represents the left carousel button DOM object
var leftBtn = btns.children[0];
// This variable represents the right carousel button DOM object
var rightBtn = btns.children[1];

// This array contains the path to each image in the carousel
var images = [
  '../images/Slideshow Images/cristina-gottardi-boxam4k4rQw-unsplash.jpg',
  '../images/Slideshow Images/lochlainn-riordan-G6CR8v_bts0-unsplash.jpg',
  '../images/82687168_1006968263021574_2332176493087555584_o.jpg',
];

// This array contains the description of each image in the carousel
var captions = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, commodi?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, commodi?',
  'A group photo right after one one of our yoga events',
];

// This variable represents the image that is currently being displayed in the carousel
// It is initially set to a random number
var currentImage = Math.floor(Math.random() * images.length);

// We run this functionally when the page is initially loaded so that the carousel
// will have a random initial image
switchBackground();

// This event listener will change the current image index to the previous one,
// when the left button is clicked and if the index is at 0 the index will circle to the final image in the array. 
leftBtn.addEventListener('click', function () {
  currentImage = mod(currentImage - 1, images.length);
  switchBackground();
});

// This event listener will change the current image index to the next one,
// when the right button is clicked and if the index is at its final position
// the index will circle to position 0 in the array.
rightBtn.addEventListener('click', function () {
  currentImage = mod(currentImage + 1, images.length);
  switchBackground();
});