window.IMPULS = window.IMPULS || {};

const MENU_WINDOWS = {
  "win-soft": 1600,
  "win-even": 1200,
  "win-hard": 900
};

const VERDICTS = {
  hit: true,
  miss: true,
  late: true,
  timeout: true
};

let flashId = 0;

const renderMenu = function () {
  const state = window.IMPULS.state;
  Object.keys(MENU_WINDOWS).forEach(function (id) {
    const pressed = MENU_WINDOWS[id] === state.windowMs;
    document.getElementById(id).setAttribute("aria-pressed", pressed ? "true" : "false");
  });
  document.querySelector('[data-pack="p1"]').setAttribute("aria-pressed", state.pack === "p1" ? "true" : "false");
};

const showScreen = function (id) {
  document.getElementById("screen-menu").classList.toggle("is-hidden", id !== "screen-menu");
  document.getElementById("screen-round").classList.toggle("is-hidden", id !== "screen-round");
};

const focusRound = function () {
  document.getElementById("screen-round").focus();
};

const findCard = function (id) {
  const cards = window.IMPULS.loadCards();
  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].id === id) {
      return cards[i];
    }
  }
  return null;
};

const countHits = function (first) {
  let hits = 0;
  const ids = Object.keys(first);
  for (let i = 0; i < ids.length; i += 1) {
    if (first[ids[i]] === "hit") {
      hits += 1;
    }
  }
  return hits;
};

const copyVerdicts = function (source) {
  const next = {};
  if (!source) {
    return next;
  }
  const ids = Object.keys(source);
  for (let i = 0; i < ids.length; i += 1) {
    const id = ids[i];
    const verdict = source[id];
    if (findCard(id) && VERDICTS[verdict]) {
      next[id] = verdict;
    }
  }
  return next;
};

const idsKnown = function (list) {
  for (let i = 0; i < list.length; i += 1) {
    if (!findCard(list[i])) {
      return false;
    }
  }
  return true;
};

const isWindow = function (ms) {
  return ms === 1600 || ms === 1200 || ms === 900;
};

const sameAnswer = function (pick, answer) {
  return String(pick).trim().toLowerCase() === String(answer).trim().toLowerCase();
};

const readRound = function () {
  try {
    return window.IMPULS.load("round");
  } catch (err) {
    return null;
  }
};

const writeRound = function (payload) {
  try {
    window.IMPULS.save("round", payload);
  } catch (err) {
    // Сховище інколи недоступне. Імпульс від цього не зупиняється.
  }
};

const persistActive = function () {
  const state = window.IMPULS.state;
  writeRound({
    done: false,
    pack: state.pack,
    windowMs: state.windowMs,
    phase: state.phase,
    main: state.main.slice(),
    repair: state.repair.slice(),
    first: copyVerdicts(state.first)
  });
};

const cancelFrame = function () {
  const state = window.IMPULS.state;
  if (!state.rafId) {
    return;
  }
  cancelAnimationFrame(state.rafId);
  state.rafId = 0;
};

const clearFlash = function () {
  if (!flashId) {
    return;
  }
  clearTimeout(flashId);
  flashId = 0;
};

const statusText = function (hits, total) {
  return "Перший імпульс: " + hits + "/" + total;
};

const finishRound = function () {
  const state = window.IMPULS.state;
  const hits = countHits(state.first);
  const total = window.IMPULS.loadCards().length;
  cancelFrame();
  clearFlash();
  state.locked = true;
  state.currentId = null;
  state.presented = [];
  state.main = [];
  state.repair = [];
  window.IMPULS.setPhase("menu");
  writeRound({
    done: true,
    hits: hits,
    total: total,
    windowMs: state.windowMs,
    pack: state.pack
  });
  showScreen("screen-menu");
  document.getElementById("menu-status").textContent = statusText(hits, total);
  document.getElementById("repair-badge").classList.add("is-hidden");
  document.getElementById("timer").classList.remove("is-hit", "is-miss");
  renderMenu();
  document.getElementById("btn-start").focus();
};

const showNext = function () {
  const state = window.IMPULS.state;
  const upcoming = window.IMPULS.nextCard();
  if (!upcoming) {
    finishRound();
    return;
  }
  if (upcoming.repair) {
    window.IMPULS.setPhase("repair");
  }
  const card = findCard(upcoming.id);
  if (!card) {
    finishRound();
    return;
  }
  state.currentId = upcoming.id;
  state.presented = window.IMPULS.shuffle(card.options);
  document.getElementById("stimulus").textContent = card.prompt;
  for (let i = 0; i < 4; i += 1) {
    document.getElementById("opt-" + (i + 1)).textContent = state.presented[i] || "";
  }
  const total = window.IMPULS.loadCards().length;
  const badge = document.getElementById("repair-badge");
  if (upcoming.repair) {
    document.getElementById("counter").textContent = total + "/" + total;
    badge.classList.remove("is-hidden");
  } else {
    const n = total - state.main.length + 1;
    document.getElementById("counter").textContent = n + "/" + total;
    badge.classList.add("is-hidden");
  }
  focusRound();
  armTimer(state.windowMs);
};

const flash = function (verdict) {
  const timer = document.getElementById("timer");
  timer.style.transform = "scaleX(1)";
  timer.classList.remove("is-hit", "is-miss");
  // Стеля спалаху — 200 мс. Під смугою немає правила.
  timer.classList.add(verdict === "hit" ? "is-hit" : "is-miss");
  focusRound();
  clearFlash();
  flashId = window.setTimeout(function () {
    flashId = 0;
    timer.classList.remove("is-hit", "is-miss");
    showNext();
  }, 200);
};

const commit = function (verdict) {
  const state = window.IMPULS.state;
  if (state.locked) {
    return;
  }
  state.locked = true;
  cancelFrame();
  const id = state.currentId;
  if (state.phase === "repair") {
    state.repair.shift();
    if (verdict !== "hit") {
      window.IMPULS.pushRepair(id);
    }
  } else {
    window.IMPULS.recordAttempt(id, verdict);
    state.main.shift();
    if (verdict !== "hit") {
      window.IMPULS.pushRepair(id);
    }
  }
  // Після картки, не в кінці раунду. Порожня черга вже є результат.
  if (state.main.length === 0 && state.repair.length === 0) {
    writeRound({
      done: true,
      hits: countHits(state.first),
      total: window.IMPULS.loadCards().length,
      windowMs: state.windowMs,
      pack: state.pack
    });
  } else {
    persistActive();
  }
  flash(verdict);
};

const armTimer = function (ms) {
  const state = window.IMPULS.state;
  const timer = document.getElementById("timer");
  const started = performance.now();
  state.cardStartedAt = started;
  state.locked = false;
  cancelFrame();
  timer.classList.remove("is-hit", "is-miss");
  timer.style.transform = "scaleX(1)";

  const frame = function (now) {
    if (state.locked || state.cardStartedAt !== started) {
      return;
    }
    const ratio = 1 - (now - started) / ms;
    if (ratio <= 0) {
      timer.style.transform = "scaleX(0)";
      commit("timeout");
      return;
    }
    timer.style.transform = "scaleX(" + ratio + ")";
    state.rafId = requestAnimationFrame(frame);
  };

  state.rafId = requestAnimationFrame(frame);
};

window.IMPULS.choose = function (index) {
  const state = window.IMPULS.state;
  if (state.phase !== "round" && state.phase !== "repair") {
    return;
  }
  if (state.locked) {
    return;
  }
  const pick = state.presented[index];
  if (!pick) {
    return;
  }
  const card = findCard(state.currentId);
  if (!card) {
    return;
  }
  const elapsed = performance.now() - state.cardStartedAt;
  let verdict = "miss";
  // Після вікна це запізнення, навіть якщо форма правильна.
  if (elapsed >= state.windowMs) {
    verdict = "late";
  } else if (sameAnswer(pick, card.answer)) {
    verdict = "hit";
  }
  commit(verdict);
};

window.IMPULS.selectWindow = function (ms) {
  if (window.IMPULS.state.phase !== "menu") {
    return;
  }
  if (!isWindow(ms)) {
    return;
  }
  window.IMPULS.setWindow(ms);
  renderMenu();
};

window.IMPULS.startRound = function () {
  const state = window.IMPULS.state;
  if (state.phase !== "menu") {
    return;
  }
  cancelFrame();
  clearFlash();
  const cards = window.IMPULS.loadCards();
  if (!cards.length) {
    return;
  }
  state.main = window.IMPULS.buildQueue(cards);
  state.repair = [];
  state.first = {};
  state.currentId = null;
  state.presented = [];
  state.locked = false;
  window.IMPULS.setPhase("round");
  persistActive();
  showScreen("screen-round");
  showNext();
};

const restoreRound = function () {
  const saved = readRound();
  if (!saved || typeof saved !== "object") {
    return false;
  }
  if (!isWindow(saved.windowMs)) {
    writeRound(null);
    return false;
  }
  window.IMPULS.setWindow(saved.windowMs);
  if (saved.done === true) {
    const hits = Number(saved.hits);
    const total = Number(saved.total);
    if (Number.isFinite(hits) && Number.isFinite(total)) {
      document.getElementById("menu-status").textContent = statusText(hits, total);
    }
    renderMenu();
    return true;
  }
  if (!Array.isArray(saved.main) || !Array.isArray(saved.repair)) {
    writeRound(null);
    return false;
  }
  if (!idsKnown(saved.main) || !idsKnown(saved.repair)) {
    writeRound(null);
    return false;
  }
  const state = window.IMPULS.state;
  state.main = saved.main.slice();
  state.repair = saved.repair.slice();
  state.first = copyVerdicts(saved.first);
  if (state.main.length === 0 && state.repair.length === 0) {
    window.IMPULS.setPhase("menu");
    writeRound(null);
    return false;
  }
  window.IMPULS.setPhase(state.main.length > 0 ? "round" : "repair");
  showScreen("screen-round");
  renderMenu();
  showNext();
  return true;
};

const bindClicks = function () {
  Object.keys(MENU_WINDOWS).forEach(function (id) {
    document.getElementById(id).addEventListener("click", function () {
      window.IMPULS.selectWindow(MENU_WINDOWS[id]);
    });
  });

  document.querySelector('[data-pack="p1"]').addEventListener("click", function () {
    window.IMPULS.setPack("p1");
    renderMenu();
  });

  document.getElementById("btn-start").addEventListener("click", function () {
    window.IMPULS.startRound();
  });

  for (let i = 1; i <= 4; i += 1) {
    document.getElementById("opt-" + i).addEventListener("click", function () {
      window.IMPULS.choose(i - 1);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  bindClicks();
  window.IMPULS.bindKeys();
  if (!restoreRound()) {
    renderMenu();
  }
});
