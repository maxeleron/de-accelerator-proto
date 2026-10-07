window.IMPULS = window.IMPULS || {};

const WINDOW_OPTIONS = [
  { ms: 0, label: "Без часових меж" },
  { ms: 2500, label: "М’яко 2500 мс" },
  { ms: 1800, label: "Рівно 1800 мс" },
  { ms: 1200, label: "Жорстко 1200 мс" }
];

const VERDICTS = {
  hit: true,
  miss: true,
  late: true,
  timeout: true
};

let flashId = 0;
let abortPending = false;

const winSelectRoot = function () {
  return document.getElementById("win-select");
};

const winSelectFace = function () {
  const root = winSelectRoot();
  if (!root) {
    return null;
  }
  return root.querySelector(".win-select-face");
};

const winSelectMenu = function () {
  const root = winSelectRoot();
  if (!root) {
    return null;
  }
  return root.querySelector(".win-select-menu");
};

const isWinSelectOpen = function () {
  const menu = winSelectMenu();
  return menu && !menu.classList.contains("is-hidden");
};

const closeWinSelect = function () {
  const menu = winSelectMenu();
  const face = winSelectFace();
  if (!menu || !face) {
    return;
  }
  menu.classList.add("is-hidden");
  face.setAttribute("aria-expanded", "false");
};

const isRoundSetupOpen = function () {
  return !document.getElementById("round-setup").classList.contains("is-hidden");
};

window.IMPULS.closeRoundSetup = function () {
  document.getElementById("round-setup").classList.add("is-hidden");
  document.getElementById("btn-round-edit").setAttribute("aria-expanded", "false");
  closeWinSelect();
};

window.IMPULS.toggleRoundSetup = function () {
  if (window.IMPULS.state.phase !== "menu") {
    return;
  }
  if (isRoundSetupOpen()) {
    window.IMPULS.closeRoundSetup();
    return;
  }
  document.getElementById("round-setup").classList.remove("is-hidden");
  document.getElementById("btn-round-edit").setAttribute("aria-expanded", "true");
};

const openWinSelect = function () {
  const menu = winSelectMenu();
  const face = winSelectFace();
  if (!menu || !face) {
    return;
  }
  menu.classList.remove("is-hidden");
  face.setAttribute("aria-expanded", "true");
};

const windowOptionIndex = function (ms) {
  for (let i = 0; i < WINDOW_OPTIONS.length; i += 1) {
    if (WINDOW_OPTIONS[i].ms === ms) {
      return i;
    }
  }
  return 2;
};

const windowOptionLabel = function (ms) {
  return WINDOW_OPTIONS[windowOptionIndex(ms)].label;
};

const startLabel = function (pack) {
  if (pack === "p2") {
    return "Почати раунд P2";
  }
  if (pack === "p3") {
    return "Почати раунд P3";
  }
  if (pack === "p4") {
    return "Почати раунд P4";
  }
  return "Почати раунд P1";
};

const PACK_IDS = ["p1", "p2", "p3", "p4"];

const packDeck = function (pack) {
  if (pack === "p2") {
    return window.IMPULS.cardsP2 || [];
  }
  if (pack === "p3") {
    return window.IMPULS.cardsP3 || [];
  }
  if (pack === "p4") {
    return window.IMPULS.cardsP4 || [];
  }
  return window.IMPULS.cards || [];
};

const emptySeen = function () {
  return { p1: [], p2: [], p3: [], p4: [] };
};

const loadSeen = function () {
  let saved;
  try {
    saved = window.IMPULS.load("seen");
  } catch (err) {
    saved = undefined;
  }
  const next = emptySeen();
  if (!saved || typeof saved !== "object") {
    return next;
  }
  for (let i = 0; i < PACK_IDS.length; i += 1) {
    const pack = PACK_IDS[i];
    if (Array.isArray(saved[pack])) {
      next[pack] = saved[pack].slice();
    }
  }
  return next;
};

const saveSeen = function (seen) {
  try {
    window.IMPULS.save("seen", seen);
  } catch (err) {
    // Сховище інколи недоступне. Ознайомлення лишається на цей кадр.
  }
};

const hasSeenId = function (list, id) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === id) {
      return true;
    }
  }
  return false;
};

const markSeen = function (pack, id) {
  if (!id || PACK_IDS.indexOf(pack) < 0) {
    return;
  }
  const seen = loadSeen();
  if (hasSeenId(seen[pack], id)) {
    return;
  }
  seen[pack].push(id);
  saveSeen(seen);
};

const seenCount = function (pack, seen) {
  const deck = packDeck(pack);
  const list = seen[pack] || [];
  let count = 0;
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < deck.length; j += 1) {
      if (deck[j].id === list[i]) {
        count += 1;
        break;
      }
    }
  }
  return count;
};

const renderPackSeen = function () {
  const seen = loadSeen();
  for (let i = 0; i < PACK_IDS.length; i += 1) {
    const pack = PACK_IDS[i];
    const label = document.querySelector('[data-pack="' + pack + '"] .pack-seen');
    if (!label) {
      continue;
    }
    const total = packDeck(pack).length;
    label.textContent = seenCount(pack, seen) + " / " + total;
  }
};

const packCount = function (pack) {
  const n = packDeck(pack).length;
  return n > 0 ? n : 1;
};

const clampRoundSize = function () {
  const state = window.IMPULS.state;
  const max = packCount(state.pack);
  let n = state.roundSize;
  if (typeof n !== "number" || !Number.isFinite(n) || n < 1) {
    n = max;
  } else {
    n = Math.floor(n);
    if (n > max) {
      n = max;
    }
    if (n < 1) {
      n = 1;
    }
  }
  state.roundSize = n;
  return max;
};

const renderRoundSize = function () {
  const max = clampRoundSize();
  const n = window.IMPULS.state.roundSize;
  const slider = document.getElementById("round-size");
  slider.min = "1";
  slider.max = String(max);
  slider.value = String(n);
  document.getElementById("round-size-label").textContent = n + " / " + max;
};

const renderMenu = function () {
  const state = window.IMPULS.state;
  document.getElementById("btn-start").textContent = startLabel(state.pack);
  renderRoundSize();
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
  renderPackSeen();
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

const menuIsVisible = function () {
  const menu = document.getElementById("screen-menu");
  return menu && !menu.classList.contains("is-hidden");
};

const ensureMenuPhase = function () {
  if (window.IMPULS.state.phase === "menu") {
    return true;
  }
  if (!menuIsVisible()) {
    return false;
  }
  window.IMPULS.setPhase("menu");
  return true;
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
  return ms === 0 || ms === 2500 || ms === 1800 || ms === 1200;
};

const normalizeWindow = function (ms) {
  if (isWindow(ms)) {
    return ms;
  }
  return 1800;
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
  abortPending = false;
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
  markSeen(state.pack, card.id);
  state.presented = window.IMPULS.shuffle(card.options);
  document.getElementById("stimulus").textContent = card.prompt;
  document.getElementById("gloss").textContent = card.gloss || "";
  for (let i = 0; i < 4; i += 1) {
    const btn = document.getElementById("opt-" + (i + 1));
    const label = state.presented[i] || "";
    btn.textContent = label;
    btn.classList.toggle("is-hidden", !label);
  }
  const total = Object.keys(state.first).length + state.main.length;
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
    if (abortPending) {
      finishRound();
      return;
    }
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
  // Без часових меж late немає: лише hit або miss.
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
  if (!ensureMenuPhase()) {
    return;
  }
  showSettingsView();
  pushHistory("settings");
};

window.IMPULS.closeSettings = function () {
  if (window.IMPULS.state.phase !== "settings") {
    return;
  }
  history.back();
};

window.IMPULS.openBase = function () {
  if (!ensureMenuPhase()) {
    return;
  }
  const sections = window.IMPULS.loadHandbook();
  if (!sections.length) {
    return;
  }
  showBaseView();
  pushHistory("base");
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
  if (!isRoundSetupOpen()) {
    return;
  }
  const index = windowOptionIndex(window.IMPULS.state.windowMs);
  const next = index + delta;
  if (next < 0 || next >= WINDOW_OPTIONS.length) {
    return;
  }
  window.IMPULS.selectWindow(WINDOW_OPTIONS[next].ms);
};

window.IMPULS.startRound = function () {
  if (!ensureMenuPhase()) {
    return;
  }
  const state = window.IMPULS.state;
  window.IMPULS.closeRoundSetup();
  cancelFrame();
  clearFlash();
  const cards = window.IMPULS.loadCards();
  if (!cards.length) {
    return;
  }
  clampRoundSize();
  state.main = window.IMPULS.buildQueue(cards, state.roundSize);
  state.repair = [];
  state.first = {};
  state.latency = {};
  state.currentId = null;
  state.presented = [];
  state.locked = false;
  abortPending = false;
  window.IMPULS.setPhase("round");
  persistActive();
  showScreen("screen-round");
  showNext();
};

window.IMPULS.requestAbort = function () {
  const phase = window.IMPULS.state.phase;
  if (phase !== "round" && phase !== "repair") {
    return;
  }
  // Під час межі картку не обривати: лише намір, вихід після спалаху.
  if (!window.IMPULS.state.locked) {
    abortPending = true;
    return;
  }
  finishRound();
};

const restoreRound = function () {
  const saved = readRound();
  if (!saved || typeof saved !== "object") {
    return false;
  }
  window.IMPULS.setWindow(normalizeWindow(saved.windowMs));
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
  state.roundSize = Object.keys(state.first).length + state.main.length;
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
  document.getElementById("btn-start").addEventListener("click", function () {
    window.IMPULS.startRound();
  });

  document.getElementById("btn-base").addEventListener("click", function () {
    window.IMPULS.openBase();
  });

  document.getElementById("btn-settings").addEventListener("click", function () {
    window.IMPULS.openSettings();
  });

  const root = winSelectRoot();
  const face = winSelectFace();
  const menu = winSelectMenu();

  if (face) {
    face.addEventListener("click", function () {
      if (isWinSelectOpen()) {
        closeWinSelect();
        return;
      }
      openWinSelect();
    });
  }

  if (root) {
    root.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  }

  if (menu) {
    menu.addEventListener("click", function (event) {
      const item = event.target.closest("[data-ms]");
      if (!item) {
        return;
      }
      window.IMPULS.selectWindow(Number(item.getAttribute("data-ms")));
      closeWinSelect();
    });
  }

  // Колесо гортає лише закритий список; на краях стоп, сторінку не скролити.
  if (root) {
    root.addEventListener("wheel", function (event) {
      event.preventDefault();
      if (!isRoundSetupOpen()) {
        return;
      }
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
  }

  document.addEventListener("click", function (event) {
    if (root && root.contains(event.target)) {
      return;
    }
    closeWinSelect();
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

  document.getElementById("btn-round-edit").addEventListener("click", function () {
    window.IMPULS.toggleRoundSetup();
  });

  document.getElementById("round-size").addEventListener("input", function (event) {
    const max = packCount(window.IMPULS.state.pack);
    let n = Number(event.target.value);
    if (!Number.isFinite(n)) {
      n = max;
    }
    n = Math.floor(n);
    if (n < 1) {
      n = 1;
    }
    if (n > max) {
      n = max;
    }
    window.IMPULS.state.roundSize = n;
    renderRoundSize();
  });

  document.getElementById("btn-abort").addEventListener("click", function () {
    window.IMPULS.requestAbort();
  });

  document.getElementById("btn-settings-back").addEventListener("click", function () {
    window.IMPULS.closeSettings();
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
