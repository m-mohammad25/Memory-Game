let allCards = document.querySelectorAll("div.memo-card");

let flippedCards = new Array();
const timeDelay = 500;
let flipCards = async function () {
  let clickedCard = this;
  if (isFlipped(clickedCard)) return;
  clickedCard.classList.add("flip");
  flippedCards.push(clickedCard);

  if (!areTwoCardsFlipped()) return;

  if (!areTwoCardsTheSame()) {
    flipCardsBack();
    await sleep(timeDelay);
  }
  clearArr(flippedCards);
};
const isFlipped = (card) => card.classList.contains("flip");
let areTwoCardsFlipped = () => flippedCards.length == 2;
let areTwoCardsTheSame = () =>
  flippedCards[0].dataset.name === flippedCards[1].dataset.name;
const sleep = (m) => new Promise((r) => setTimeout(r, m));
const clearArr = (arr) => arr.splice(0, arr.length);
let flipCardsBack = function () {
  setTimeout(() => {
    flippedCards.forEach((card) => {
      card.classList.remove("flip");
    });
  }, timeDelay);
};
(function shuffleCards() {
  allCards.forEach((card) => {
    let cardPos = Math.floor(Math.random() * 12);
    console.log(cardPos);
    card.style.order = cardPos;
  });
})();
allCards.forEach((card) => {
  card.addEventListener("click", flipCards);
});
