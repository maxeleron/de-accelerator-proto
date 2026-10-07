window.IMPULS = window.IMPULS || {};

window.IMPULS.state = {
  phase: "menu",
  pack: "p1",
  windowMs: 1200,
  main: [],
  repair: [],
  currentId: null,
  presented: [],
  first: {},
  cardStartedAt: 0,
  locked: false,
  rafId: 0
};

window.IMPULS.setWindow = function (ms) {
  window.IMPULS.state.windowMs = ms;
};

window.IMPULS.setPack = function (id) {
  if (id !== "p1") {
    return;
  }
  window.IMPULS.state.pack = id;
};

window.IMPULS.setPhase = function (phase) {
  window.IMPULS.state.phase = phase;
};

// Ремонт не переписує вердикт першого імпульсу.
window.IMPULS.recordAttempt = function (cardId, verdict) {
  const first = window.IMPULS.state.first;
  if (Object.prototype.hasOwnProperty.call(first, cardId)) {
    return;
  }
  first[cardId] = verdict;
};
