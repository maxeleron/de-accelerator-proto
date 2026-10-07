window.IMPULS = window.IMPULS || {};

const WINDOW_OPTIONS = [
  { ms: 1600, label: "М’яко 1600" },
  { ms: 1200, label: "Рівно 1200" },
  { ms: 900, label: "Жорстко 900" },
  { ms: 0, label: "Без вікна" }
];

const VERDICTS = {
  hit: true,
  miss: true,
  late: true,
  timeout: true
};

let flashId = 0;

const winSelectRoot = function () {
  return document.getElementById("win-select");
};

const winSelectFace = function () {
  return winSelectRoot().querySelector(".win-select-face");
};

const winSelectMenu = function () {
  return winSelectRoot().querySelector(".win-select-menu");
};

const isWinSelectOpen = function () {
  return !winSelectMenu().classList.contains("is-hidden");
};

const closeWinSelect = function () {
  winSelectMenu().classList.add("is-hidden");
  winSelectFace().setAttribute("aria-expanded", "false");
};

const openWinSelect = function () {
  winSelectMenu().classList.remove("is-hidden");
  winSelectFace().setAttribute("aria-expanded", "true");
};

const windowOptionIndex = function (ms) {
  for (let i = 0; i < WINDOW_OPTIONS.length; i += 1) {
    if (WINDOW_OPTIONS[i].ms === ms) {
      return i;
    }
  }
  return 1;
};

const windowOptionLabel = function (ms) {
  return WINDOW_OPTIONS[windowOptionIndex(ms)].label;
};

const renderMenu = function () {
  const state = window.IMPULS.state;
  document.getElementById("win-select-current").textContent = windowOptionLabel(state.windowMs);
  const items = winSelectRoot().querySelectorAll("[data-ms]");
  for (let i = 0; i < items.length; i += 1) {
    const ms = Number(items[i].getAttribute("data-ms"));
    items[i].setAttribute("aria-selected", ms === state.windowMs ? "true" : "false");
  }
  document.querySelector('[data-pack="p1"]').setAttribute("aria-pressed", state.pack === "p1" ? "true" : "false");
  document.querySelector('[data-pack="p2"]').setAttribute("aria-pressed", state.pack === "p2" ? "true" : "false");
  document.querySelector('[data-pack="p3"]').setAttribute("aria-pressed", state.pack === "p3" ? "true" : "false");
  document.querySelector('[data-pack="p4"]').setAttribute("aria-pressed", state.pack === "p4" ? "true" : "false");
};

const showScreen = function (id) {
  document.getElementById("screen-menu").classList.toggle("is-hidden", id !== "screen-menu");
  document.getElementById("screen-round").classList.toggle("is-hidden", id !== "screen-round");
  document.getElementById("screen-base").classList.toggle("is-hidden", id !== "screen-base");
  document.getElementById("screen-settings").classList.toggle("is-hidden", id !== "screen-settings");
};

const replaceHistory = function (screen) {
  try {
    history.replaceState({ screen: screen }, "");
  } catch (err) {
    // file:// інколи не дає history.state
  }
};

const pushHistory = function (screen) {
  try {
    history.pushState({ screen: screen }, "");
  } catch (err) {
    // file:// інколи не дає history.state
  }
};

const showMenuView = function () {
  const from = window.IMPULS.state.phase;
  window.IMPULS.setPhase("menu");
  showScreen("screen-menu");
  if (from === "settings") {
    document.getElementById("btn-settings").focus();
    return;
  }
  if (from === "base") {
    document.getElementById("btn-base").focus();
  }
};

const showSettingsView = function () {
  window.IMPULS.setPhase("settings");
  showScreen("screen-settings");
  document.getElementById("screen-settings").focus();
};

const showBaseView = function () {
  const sections = window.IMPULS.loadHandbook();
  if (!sections.length) {
    showMenuView();
    return;
  }
  window.IMPULS.setPhase("base");
  showScreen("screen-base");
  window.IMPULS.showBase(window.IMPULS.state.baseId || sections[0].id);
  document.getElementById("screen-base").focus();
};

const applyHistoryState = function (state) {
  const phase = window.IMPULS.state.phase;
  // Раунд свого екрану в історії не має; назад лишає в раунді.
  if (phase === "round" || phase === "repair") {
    pushHistory("menu");
    return;
  }
  const screen = state && state.screen;
  if (screen === "base") {
    showBaseView();
    return;
  }
  if (screen === "settings") {
    showSettingsView();
    return;
  }
  showMenuView();
};

const bindHistory = function () {
  replaceHistory("menu");
  // Другий menu, щоб назад під час раунду не вів на попередній сайт.
  pushHistory("menu");
  window.addEventListener("popstate", function (event) {
    applyHistoryState(event.state);
  });
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
  return ms === 1600 || ms === 1200 || ms === 900 || ms === 0;
};

const copyLatency = function (source) {
  const next = {};
  if (!source) {
    return next;
  }
  const ids = Object.keys(source);
  for (let i = 0; i < ids.length; i += 1) {
    const id = ids[i];
    const ms = source[id];
    if (findCard(id) && typeof ms === "number" && Number.isFinite(ms)) {
      next[id] = ms;
    }
  }
  return next;
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
    first: copyVerdicts(state.first),
    latency: copyLatency(state.latency)
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

const clearPickFill = function () {
  for (let i = 1; i <= 4; i += 1) {
    document.getElementById("opt-" + i).classList.remove("is-hit", "is-miss");
  }
};

const finishRound = function () {
  const state = window.IMPULS.state;
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
    windowMs: state.windowMs,
    pack: state.pack
  });
  showScreen("screen-menu");
  document.getElementById("repair-badge").classList.add("is-hidden");
  document.getElementById("timer").classList.remove("is-hit", "is-miss");
  clearPickFill();
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
  document.getElementById("gloss").textContent = card.gloss || "";
  for (let i = 0; i < 4; i += 1) {
    const btn = document.getElementById("opt-" + (i + 1));
    const label = state.presented[i] || "";
    btn.textContent = label;
    btn.classList.toggle("is-hidden", !label);
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

const flash = function (verdict, optionIndex) {
  const timer = document.getElementById("timer");
  timer.style.transform = "scaleX(1)";
  timer.classList.remove("is-hit", "is-miss");
  clearPickFill();
  // Стеля спалаху — 200 мс. Під смугою немає правила.
  timer.classList.add(verdict === "hit" ? "is-hit" : "is-miss");
  // Late і timeout не заливають кнопку: вибору немає.
  if (verdict === "hit" || verdict === "miss") {
    const btn = document.getElementById("opt-" + (optionIndex + 1));
    if (btn) {
      btn.classList.add(verdict === "hit" ? "is-hit" : "is-miss");
    }
  }
  focusRound();
  clearFlash();
  flashId = window.setTimeout(function () {
    flashId = 0;
    timer.classList.remove("is-hit", "is-miss");
    clearPickFill();
    showNext();
  }, 200);
};

const commit = function (verdict, elapsedMs, optionIndex) {
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
    window.IMPULS.recordAttempt(id, verdict, elapsedMs);
    state.main.shift();
    if (verdict !== "hit") {
      window.IMPULS.pushRepair(id);
    }
  }
  // Після картки, не в кінці раунду. Порожня черга вже є результат.
  if (state.main.length === 0 && state.repair.length === 0) {
    writeRound({
      done: true,
      windowMs: state.windowMs,
      pack: state.pack
    });
  } else {
    persistActive();
  }
  flash(verdict, optionIndex);
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

  // windowMs = 0: вікна немає — смуга стоїть повна, timeout не виникає.
  if (ms === 0) {
    return;
  }

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
  // Без вікна late немає: лише hit або miss.
  if (state.windowMs > 0 && elapsed >= state.windowMs) {
    verdict = "late";
  } else if (sameAnswer(pick, card.answer)) {
    verdict = "hit";
  }
  commit(verdict, elapsed, index);
};

const findSection = function (id) {
  const sections = window.IMPULS.loadHandbook();
  for (let i = 0; i < sections.length; i += 1) {
    if (sections[i].id === id) {
      return sections[i];
    }
  }
  return sections[0] || null;
};

const addNode = function (parent, tag, text, className) {
  const el = document.createElement(tag);
  if (className) {
    el.className = className;
  }
  if (text) {
    el.textContent = text;
  }
  parent.appendChild(el);
  return el;
};

const fillBaseTable = function (parent, table) {
  const el = addNode(parent, "table", "", "base-table");
  if (table.caption) {
    addNode(el, "caption", table.caption);
  }
  const body = addNode(el, "tbody");
  const rows = table.rows || [];
  for (let i = 0; i < rows.length; i += 1) {
    const tr = addNode(body, "tr");
    const cells = rows[i];
    for (let j = 0; j < cells.length; j += 1) {
      addNode(tr, "td", cells[j]);
    }
  }
};

const fillBaseNav = function (currentId) {
  const nav = document.getElementById("base-nav");
  nav.textContent = "";
  const sections = window.IMPULS.loadHandbook();
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const btn = addNode(nav, "button");
    btn.type = "button";
    btn.textContent = section.title;
    btn.setAttribute("aria-pressed", section.id === currentId ? "true" : "false");
    btn.addEventListener("click", function () {
      window.IMPULS.showBase(section.id);
    });
  }
};

const fillBaseBody = function (section) {
  const body = document.getElementById("base-body");
  body.textContent = "";
  addNode(body, "h3", section.title);
  if (section.note) {
    addNode(body, "p", section.note, "base-note");
  }
  const tables = section.tables || [];
  for (let i = 0; i < tables.length; i += 1) {
    fillBaseTable(body, tables[i]);
  }
  const examples = section.examples || [];
  for (let i = 0; i < examples.length; i += 1) {
    const line = addNode(body, "p", examples[i], "base-example");
    line.lang = "de";
  }
};

window.IMPULS.showBase = function (id) {
  const section = findSection(id);
  if (!section) {
    return;
  }
  window.IMPULS.state.baseId = section.id;
  fillBaseNav(section.id);
  fillBaseBody(section);
};

window.IMPULS.openSettings = function () {
  if (window.IMPULS.state.phase !== "menu") {
    return;
  }
  pushHistory("settings");
  showSettingsView();
};

window.IMPULS.closeSettings = function () {
  if (window.IMPULS.state.phase !== "settings") {
    return;
  }
  history.back();
};

window.IMPULS.openBase = function () {
  if (window.IMPULS.state.phase !== "menu") {
    return;
  }
  const sections = window.IMPULS.loadHandbook();
  if (!sections.length) {
    return;
  }
  pushHistory("base");
  showBaseView();
};

window.IMPULS.closeBase = function () {
  if (window.IMPULS.state.phase !== "base") {
    return;
  }
  history.back();
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
  closeWinSelect();
};

const stepWindow = function (delta) {
  const index = windowOptionIndex(window.IMPULS.state.windowMs);
  const next = index + delta;
  if (next < 0 || next >= WINDOW_OPTIONS.length) {
    return;
  }
  window.IMPULS.selectWindow(WINDOW_OPTIONS[next].ms);
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
  state.latency = {};
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
  if (saved.pack === "p1" || saved.pack === "p2" || saved.pack === "p3" || saved.pack === "p4") {
    window.IMPULS.setPack(saved.pack);
  }
  if (saved.done === true) {
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
  state.latency = copyLatency(saved.latency);
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
  const root = winSelectRoot();
  const face = winSelectFace();
  const menu = winSelectMenu();

  face.addEventListener("click", function () {
    if (isWinSelectOpen()) {
      closeWinSelect();
      return;
    }
    openWinSelect();
  });

  root.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });

  menu.addEventListener("click", function (event) {
    const item = event.target.closest("[data-ms]");
    if (!item) {
      return;
    }
    window.IMPULS.selectWindow(Number(item.getAttribute("data-ms")));
    closeWinSelect();
  });

  // Колесо гортає лише закритий список; на краях стоп, сторінку не скролити.
  root.addEventListener("wheel", function (event) {
    event.preventDefault();
    if (isWinSelectOpen()) {
      return;
    }
    if (event.deltaY > 0) {
      stepWindow(1);
      return;
    }
    if (event.deltaY < 0) {
      stepWindow(-1);
    }
  }, { passive: false });

  document.addEventListener("click", function (event) {
    if (!root.contains(event.target)) {
      closeWinSelect();
    }
  });

  document.querySelector('[data-pack="p1"]').addEventListener("click", function () {
    window.IMPULS.setPack("p1");
    renderMenu();
  });

  document.querySelector('[data-pack="p2"]').addEventListener("click", function () {
    window.IMPULS.setPack("p2");
    renderMenu();
  });

  document.querySelector('[data-pack="p3"]').addEventListener("click", function () {
    window.IMPULS.setPack("p3");
    renderMenu();
  });

  document.querySelector('[data-pack="p4"]').addEventListener("click", function () {
    window.IMPULS.setPack("p4");
    renderMenu();
  });

  document.getElementById("btn-start").addEventListener("click", function () {
    window.IMPULS.startRound();
  });

  document.getElementById("btn-settings").addEventListener("click", function () {
    window.IMPULS.openSettings();
  });

  document.getElementById("btn-settings-back").addEventListener("click", function () {
    window.IMPULS.closeSettings();
  });

  document.getElementById("btn-base").addEventListener("click", function () {
    window.IMPULS.openBase();
  });

  document.getElementById("btn-base-back").addEventListener("click", function () {
    window.IMPULS.closeBase();
  });

  document.getElementById("btn-theme").addEventListener("click", function () {
    window.IMPULS.toggleTheme();
  });
  window.IMPULS.applyTheme(document.documentElement.getAttribute("data-theme"));

  for (let i = 1; i <= 4; i += 1) {
    document.getElementById("opt-" + i).addEventListener("click", function () {
      window.IMPULS.choose(i - 1);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  bindClicks();
  window.IMPULS.bindKeys();
  bindHistory();
  if (!restoreRound()) {
    renderMenu();
  }
});
