var title = document.querySelector('.newsletter-cta__title');
var button = document.querySelector('.newsletter-cta__btn');
var email = document.querySelector('.newsletter-cta__email');
var newsletter = document.querySelector('.newsletter-cta');

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

button.addEventListener('click', e => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    email.setAttribute('placeholder', 'Please enter a valid email address.');
  } else if (button.classList.contains('newsletter-cta__btn')) {
    email.classList.add('newsletter-cta__email--joined');
    email.setAttribute('disabled', '');
    button.classList.add('newsletter-cta__btn--joined');
    button.textContent = 'Thanks for Joining. 😊';
  }
});
