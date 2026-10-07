window.IMPULS = window.IMPULS || {};

window.IMPULS.shuffle = function (list) {
  const next = list.slice();
  let i = next.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i];
    next[i] = next[j];
    next[j] = swap;
    i -= 1;
  }
  return next;
};

window.IMPULS.buildQueue = function (cards, count) {
  const ids = [];
  for (let i = 0; i < cards.length; i += 1) {
    ids.push(cards[i].id);
  }
  const shuffled = window.IMPULS.shuffle(ids);
  // Зріз після перемішування, не перші N з колоди.
  if (typeof count !== "number" || !Number.isFinite(count)) {
    return shuffled;
  }
  let n = Math.floor(count);
  if (n < 1) {
    n = 1;
  }
  if (n > shuffled.length) {
    n = shuffled.length;
  }
  return shuffled.slice(0, n);
};

window.IMPULS.pushRepair = function (cardId) {
  window.IMPULS.state.repair.push(cardId);
};

window.IMPULS.nextCard = function () {
  const state = window.IMPULS.state;
  if (state.phase !== "repair" && state.main.length > 0) {
    return { id: state.main[0], repair: false };
  }
  if (state.repair.length > 0) {
    return { id: state.repair[0], repair: true };
  }
  return null;
};
