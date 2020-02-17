// This variable represents the call to action button
var button = document.querySelector('.newsletter-cta__btn');
// This variable represents the email form
var email = document.querySelector('.newsletter-cta__email');

// Very simple regular expression-based email validator script by C. Lee from stack overflow
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// This event listener will dynamically change the size of the 
// text depending on how long the email is
email.addEventListener('input', function (e) {
  var target = e.target;
  var length = target.value.length;
  if (length >= 20) {
    target.style.fontSize = '0.8rem';
  } else if (length >= 10) {
    target.style.fontSize = '1rem';
  } else {
    target.style.fontSize = '1.2rem';
  }
});

// This event listener will check if the email is valid when the join button is clicked,
// and will behave differently depending on the outcome
button.addEventListener('click', function (e) {
  e.preventDefault();
  // If the email is not valid. The email will be deleted and a 
  // message will be displayed to enter a valid email
  if (!validateEmail(email.value)) {
    email.value = '';
    email.setAttribute('placeholder', 'Please enter a valid email address.');
  }
  // If the email is valid the form will become disabled, and will shrink, 
  // and the join button will become longer and will display different text
  else if (button.classList.contains('newsletter-cta__btn')) {
    email.classList.add('newsletter-cta__email--joined');
    email.setAttribute('disabled', '');
    button.classList.add('newsletter-cta__btn--joined');
    button.textContent = 'Thanks for Joining. 😊';
  }
});