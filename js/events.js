function displayInfo(card) {
  card.children[0].style.visibility = 'visible';
  card.children[0].style.transform = 'translateY(-40px)';
}
function removeInfo(card) {
  card.children[0].style.visibility = 'hidden';
  card.children[0].style.transform = 'translateY(0)';
}

function backgroundWithoutOverlay(index) {
  eventCards[index].style.background = URLS[index];
  eventCards[index].style.backgroundSize = 'cover';
  eventCards[index].style.backgroundPosition = 'center';
}
function backgroundWithOverlay(index) {
  eventCards[index].style.background = 'rgba(0, 0, 0, 0.4) ' + URLS[index];
  eventCards[index].style.backgroundBlendMode = 'overlay';
  eventCards[index].style.backgroundSize = 'cover';
  eventCards[index].style.backgroundPosition = 'center';
}

function joinHandler(index) {
  eventCards[index].classList.add('events-cards--joined');
  eventCards[index].style.background = '#27ae60';
  eventCards[index].children[0].style.transform = 'translateY(-10px)';
  eventCards[index].style.justifyContent = 'center';
  eventCards[index].children[0].innerHTML =
    '<div class="registration-message">Thank you for your interest. Please fill in the forms below 🙂</div>';
  registrationForms[index].classList.remove('hidden');
  eventCards[index].children[0].append(registrationForms[index]);
}

function acceptHandler(index) {
  eventCards[index].style.background = '#2ecc71';
  registrationForms[index].classList.add('hidden');
  eventCards[index].children[0].innerHTML =
    '<div class="registration-message">We look forward to meeting you.😄 Please check your email.</div>';
}

function rejectHandler(index) {
  var registrationMessage = eventCards[index].querySelector(
    '.registration-message',
  );
  registrationMessage.textContent = 'Please enter a valid name and email. 🙁';
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

var URLS = [
  "url('./../images/anupam-mahapatra-Vz0RbclzG_w-unsplash.jpg')",
  "url('./../images/john-mark-smith-9QTQFihyles-unsplash.jpg')",
  "url('../images/alex-munsell-GT6JIOvB3Ks-unsplash.jpg')",
  "url('../images/kolar-io-c8Ryxp2N3Gw-unsplash.jpg')",
];

var registrationForm = document.querySelector('.registration-forms');
var registrationForms = [];

var eventCards = document.querySelectorAll('.events-card');

for (var i = 0; i < eventCards.length; i++) {
  registrationForms[i] = registrationForm.cloneNode(true);
}

for (var i = 0; i < eventCards.length; i++) {
  backgroundWithoutOverlay(i);
  eventCards[i].addEventListener(
    'mouseover',
    function() {
      if (!eventCards[this].classList.contains('events-cards--joined')) {
        backgroundWithOverlay(this);
        displayInfo(eventCards[this]);
      }
    }.bind(i),
  );

  eventCards[i].addEventListener(
    'mouseout',
    function() {
      if (!eventCards[this].classList.contains('events-cards--joined')) {
        backgroundWithoutOverlay(this);
        removeInfo(eventCards[this]);
      }
    }.bind(i),
  );
}

var joinBtns = document.querySelectorAll('.events-card__btn');

for (var i = 0; i < joinBtns.length; i++) {
  joinBtns[i].addEventListener(
    'click',
    function(e) {
      e.preventDefault();
      joinHandler(this);
    }.bind(i),
  );
}

var names = [];
var emails = [];
var submitButtons = [];

for (var i = 0; i < registrationForms.length; i++) {
  names[i] = registrationForms[i].querySelector('.name-input');
  emails[i] = registrationForms[i].querySelector('.email-input');
  submitButtons[i] = registrationForms[i].querySelector('.submit-button');
}
for (var i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener(
    'click',
    function(e) {
      e.preventDefault();
      if (validateEmail(emails[this].value) && names[this].value.length > 0) {
        acceptHandler(this);
      } else {
        rejectHandler(this);
      }
    }.bind(i),
  );
}
