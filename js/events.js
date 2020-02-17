// Helper function to display an event's information when hovering over it
function displayInfo(card) {
  card.children[0].style.visibility = 'visible';
  card.children[0].style.transform = 'translateY(-40px)';
}

// Helper function to hide am event's information when the user is no longer hovering over it
function removeInfo(card) {
  card.children[0].style.visibility = 'hidden';
  card.children[0].style.transform = 'translateY(0)';
}

// Helper function to set the background of an event without an overlay
function backgroundWithoutOverlay(index) {
  eventCards[index].style.background = URLS[index];
  eventCards[index].style.backgroundSize = 'cover';
  eventCards[index].style.backgroundPosition = 'center';
}

// Helper function to set the background of an event with an overlay
function backgroundWithOverlay(index) {
  eventCards[index].style.background = 'rgba(0, 0, 0, 0.4) ' + URLS[index];
  eventCards[index].style.backgroundBlendMode = 'overlay';
  eventCards[index].style.backgroundSize = 'cover';
  eventCards[index].style.backgroundPosition = 'center';
}

// Helper function that defines what happens when the join button is clicked.
// When the join button is clicked, the background will become green, a message will
// appear asking for a name and email, a form will appear will appear to input your
// name and email, and there will be a submit button as well
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

// This defines what happens when the user enters a valid name and email, and presses the submit button.
// If the name and email are valid the forms will be hidden and a welcoming message will be displayed
function acceptHandler(index) {
  registrationForms[index].classList.add('hidden');
  eventCards[index].children[0].innerHTML =
    '<div class="registration-message">We look forward to meeting you.😄 Please check your email.</div>';
}
// This defines what happens when the user enters an invalid name or email, and presses the submit button
// If the name or email are invalid then a message asking the user to enter a valid name and email will appear
function rejectHandler(index) {
  var registrationMessage = eventCards[index].querySelector('.registration-message');
  registrationMessage.textContent = 'Please enter a valid name and email. 🙁';
}

// Very simple regular expression-based email validator script by C. Lee from stack overflow
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// This array contains the path to each event's background image
var URLS = [
  "url('./../images/anupam-mahapatra-Vz0RbclzG_w-unsplash.jpg')",
  "url('./../images/john-mark-smith-9QTQFihyles-unsplash.jpg')",
  "url('../images/alex-munsell-GT6JIOvB3Ks-unsplash.jpg')",
  "url('../images/kolar-io-c8Ryxp2N3Gw-unsplash.jpg')",
];

// This variable represents the (hidden) registration form DOM element
var registrationForm = document.querySelector('.registration-forms');

// This array will be filled with copies of the registranForm DOM object, one for each event
var registrationForms = [];

// This variable represents the event cards. In this website there are only 4 events,
// but I wrote the JavaScript code to be able to scale up to any number of events
var eventCards = document.querySelectorAll('.events-card');

// This loop fills the registrationForms array with copies of the registrationForm DOM element
for (var i = 0; i < eventCards.length; i++) {
  registrationForms[i] = registrationForm.cloneNode(true);
}

// This loop cycles through the event cards and adds the appropriate background as well
// as adding a 'mouseover' event listener to each card
for (var i = 0; i < eventCards.length; i++) {
  backgroundWithoutOverlay(i);
  // This event listener will trigger when the user hovers over the card, and will display
  // a dimmed overlay along with information about the event and a join button
  eventCards[i].addEventListener(
    'mouseover',
    function () {
      if (!eventCards[this].classList.contains('events-cards--joined')) {
        backgroundWithOverlay(this);
        displayInfo(eventCards[this]);
      }
    }.bind(i),
  );
  // This event listener will trigger when the user is no longer hovering over the card, and will remove
  // the dimmed overlay as well as the information about the event and the join button
  eventCards[i].addEventListener(
    'mouseout',
    function () {
      if (!eventCards[this].classList.contains('events-cards--joined')) {
        backgroundWithoutOverlay(this);
        removeInfo(eventCards[this]);
      }
    }.bind(i),
  );
}

// This variable represents all the join button DOM elements in the page
var joinBtns = document.querySelectorAll('.events-card__btn');

// This loop iterates through all the join button DOM elements and adds an event listener to each one
for (var i = 0; i < joinBtns.length; i++) {
  joinBtns[i].addEventListener(
    'click',
    function (e) {
      e.preventDefault();
      joinHandler(this);
    }.bind(i),
  );
}

// These three arrays will be filled up with the name form DOM elements, the email form DOM elements,
// and submit button DOM elements respectively
var names = [];
var emails = [];
var submitButtons = [];

// This loop fills up the names, emails, and submitButtons arrays
for (var i = 0; i < registrationForms.length; i++) {
  names[i] = registrationForms[i].querySelector('.name-input');
  emails[i] = registrationForms[i].querySelector('.email-input');
  submitButtons[i] = registrationForms[i].querySelector('.submit-button');
}

// This loop goes through all the submit buttons and adds an event listener to each one.
// If the name and email are valid it will call the acceptHandler, if they are not it will call the rejectHandler
for (var i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener(
    'click',
    function (e) {
      e.preventDefault();
      if (validateEmail(emails[this].value) && names[this].value.length > 0) {
        acceptHandler(this);
      } else {
        rejectHandler(this);
      }
    }.bind(i),
  );
}