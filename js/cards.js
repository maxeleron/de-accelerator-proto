window.IMPULS = window.IMPULS || {};

// data/p1-sein-haben.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cards = [
  {
    id: "sh-01",
    muster: "sein-haben",
    prompt: "я є",
    answer: "bin",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-02",
    muster: "sein-haben",
    prompt: "ти є",
    answer: "bist",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-03",
    muster: "sein-haben",
    prompt: "ми є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-04",
    muster: "sein-haben",
    prompt: "я маю",
    answer: "habe",
    options: ["habe", "hast", "hat", "haben"]
  }
];

window.IMPULS.cards.forEach(function (card) {
  Object.freeze(card.options);
  Object.freeze(card);
});
Object.freeze(window.IMPULS.cards);

window.IMPULS.loadCards = function () {
  return window.IMPULS.cards;
};
