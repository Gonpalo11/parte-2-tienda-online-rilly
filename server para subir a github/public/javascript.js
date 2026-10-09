const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const totalCards = cards.length;
const cardsPerPage = 3;

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - cardsPerPage) {
    currentIndex += cardsPerPage;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= cardsPerPage;
  } else {
    currentIndex = totalCards - cardsPerPage;
  }
  updateCarousel();
});

function updateCarousel() {
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = 20;
  const amountToMove = (cardWidth + gap) * currentIndex;
  track.style.transform = `translateX(-${amountToMove}px)`;
}