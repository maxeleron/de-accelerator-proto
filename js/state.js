window.IMPULS = window.IMPULS || {};

window.IMPULS.state = {
  phase: "menu",
  pack: "p1",
  windowMs: 1800,
  roundSize: 0,
  main: [],
  repair: [],
  currentId: null,
  presented: [],
  first: {},
  latency: {},
  baseId: null,
  workshop: null,
  workshopCards: null,
  cardStartedAt: 0,
  locked: false,
  rafId: 0
};

window.IMPULS.setWindow = function (ms) {
  window.IMPULS.state.windowMs = ms;
};

window.IMPULS.setPack = function (id) {
  if (id !== "p1" && id !== "p2" && id !== "p3" && id !== "p4" && id !== "p5" && id !== "mix") {
    return;
  }
  window.IMPULS.state.pack = id;
};

window.IMPULS.setPhase = function (phase) {
  window.IMPULS.state.phase = phase;
};

// Ремонт не переписує вердикт першого імпульсу.
window.IMPULS.recordAttempt = function (cardId, verdict, ms) {
  const state = window.IMPULS.state;
  if (Object.prototype.hasOwnProperty.call(state.first, cardId)) {
    return;
  }
  state.first[cardId] = verdict;
  // Час до keydown пишемо в спробу; на екран поки не виводимо.
  if (typeof ms === "number" && Number.isFinite(ms)) {
    state.latency[cardId] = Math.round(ms);
  }
};
