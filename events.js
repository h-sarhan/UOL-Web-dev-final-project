function displayInfo(card) {
  card.children[0].style.visibility = 'visible';
  card.children[0].style.transform = 'translateY(-40px)';
}

function removeInfo(card) {
  card.children[0].style.visibility = 'hidden';
  card.children[0].style.transform = 'translateY(0)';
}

var eventCards = document.querySelectorAll('.events-card');

eventCards.forEach(card => {
  card.addEventListener('mouseover', () => displayInfo(card));
  card.addEventListener('mouseout', () => removeInfo(card));
});
