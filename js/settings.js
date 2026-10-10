window.IMPULS = window.IMPULS || {};

window.IMPULS.defaultSettings = {
  version: 1,
  showKeys: true,
  optionLayout: "list",
  uiSound: false,
  speakForm: false,
  shuffleOptions: true,
  uiLang: "uk",
  glossLang: "uk",
  packFolded: false,
  workshopFolded: false,
  showMedian: false
};

const copySettings = function (source) {
  const next = {};
  const keys = Object.keys(source);
  for (let i = 0; i < keys.length; i += 1) {
    next[keys[i]] = source[keys[i]];
  }
  return next;
};

window.IMPULS.settings = copySettings(window.IMPULS.defaultSettings);

window.IMPULS.loadSettings = function () {
  let saved;
  try {
    saved = window.IMPULS.load("settings");
  } catch (err) {
    saved = undefined;
  }
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
    window.IMPULS.settings = copySettings(window.IMPULS.defaultSettings);
    return window.IMPULS.settings;
  }
  window.IMPULS.settings = copySettings(saved);
  if (window.IMPULS.settings.showKeys !== false) {
    window.IMPULS.settings.showKeys = true;
  }
  if (window.IMPULS.settings.optionLayout !== "table" && window.IMPULS.settings.optionLayout !== "keys") {
    window.IMPULS.settings.optionLayout = "list";
  }
  if (window.IMPULS.settings.uiSound !== true) {
    window.IMPULS.settings.uiSound = false;
  }
  if (window.IMPULS.settings.speakForm !== true) {
    window.IMPULS.settings.speakForm = false;
  }
  if (window.IMPULS.settings.shuffleOptions !== false) {
    window.IMPULS.settings.shuffleOptions = true;
  }
  if (window.IMPULS.settings.uiLang !== "en" && window.IMPULS.settings.uiLang !== "de") {
    window.IMPULS.settings.uiLang = "uk";
  }
  if (window.IMPULS.settings.glossLang !== "en" && window.IMPULS.settings.glossLang !== "de" && window.IMPULS.settings.glossLang !== "off") {
    window.IMPULS.settings.glossLang = "uk";
  }
  if (window.IMPULS.settings.packFolded !== true) {
    window.IMPULS.settings.packFolded = false;
  }
  if (window.IMPULS.settings.workshopFolded !== true) {
    window.IMPULS.settings.workshopFolded = false;
  }
  if (window.IMPULS.settings.showMedian !== true) {
    window.IMPULS.settings.showMedian = false;
  }
  return window.IMPULS.settings;
};

window.IMPULS.saveSettings = function () {
  try {
    window.IMPULS.save("settings", window.IMPULS.settings);
  } catch (err) {
    // Сховище інколи недоступне. Налаштування лишаються на цей кадр.
  }
};

window.IMPULS.setSetting = function (key, value) {
  window.IMPULS.settings[key] = value;
  window.IMPULS.saveSettings();
};

const applyShowKeys = function () {
  const on = window.IMPULS.settings.showKeys !== false;
  document.documentElement.setAttribute("data-show-keys", on ? "true" : "false");
  const box = document.getElementById("set-show-keys");
  if (box) {
    box.checked = on;
  }
};

const bindShowKeys = function () {
  const box = document.getElementById("set-show-keys");
  if (!box) {
    return;
  }
  box.addEventListener("change", function () {
    // Вимкнений ховає квадрати, клавіші 1–4 лишаються.
    window.IMPULS.setSetting("showKeys", box.checked);
    applyShowKeys();
  });
};

const applyShowMedian = function () {
  const on = window.IMPULS.settings.showMedian === true;
  const box = document.getElementById("set-show-median");
  if (box) {
    box.checked = on;
  }
  if (typeof window.IMPULS.refreshChrome === "function") {
    window.IMPULS.refreshChrome();
  }
};

const bindShowMedian = function () {
  const box = document.getElementById("set-show-median");
  if (!box) {
    return;
  }
  box.addEventListener("change", function () {
    window.IMPULS.setSetting("showMedian", box.checked === true);
    applyShowMedian();
  });
};

const applyOptionLayout = function () {
  const raw = window.IMPULS.settings.optionLayout;
  const layout = raw === "table" || raw === "keys" ? raw : "list";
  document.documentElement.setAttribute("data-option-layout", layout);
  const list = document.getElementById("set-layout-list");
  const table = document.getElementById("set-layout-table");
  const keys = document.getElementById("set-layout-keys");
  if (list) {
    list.checked = layout === "list";
  }
  if (table) {
    table.checked = layout === "table";
  }
  if (keys) {
    keys.checked = layout === "keys";
  }
  if (typeof window.IMPULS.refreshChrome === "function") {
    window.IMPULS.refreshChrome();
  }
};

const applyUiSound = function () {
  const on = window.IMPULS.settings.uiSound === true;
  const box = document.getElementById("set-ui-sound");
  if (box) {
    box.checked = on;
  }
  if (!on && typeof window.IMPULS.stopUiSound === "function") {
    window.IMPULS.stopUiSound();
  }
};

const bindUiSound = function () {
  const box = document.getElementById("set-ui-sound");
  if (!box) {
    return;
  }
  box.addEventListener("change", function () {
    window.IMPULS.setSetting("uiSound", box.checked === true);
    applyUiSound();
  });
};

const applySpeakForm = function () {
  const on = window.IMPULS.settings.speakForm === true;
  const box = document.getElementById("set-speak-form");
  if (box) {
    box.checked = on;
  }
  if (!on && typeof window.IMPULS.stopSpeakForm === "function") {
    window.IMPULS.stopSpeakForm();
  }
};

const applyShuffleOptions = function () {
  const on = window.IMPULS.settings.shuffleOptions !== false;
  const box = document.getElementById("set-shuffle-options");
  if (box) {
    box.checked = on;
  }
};

const UI_LANGS = ["uk", "en", "de"];
const GLOSS_LANGS = ["uk", "en", "de", "off"];

const coerceUiLang = function (value) {
  return value === "en" || value === "de" ? value : "uk";
};

const coerceGlossLang = function (value) {
  return value === "en" || value === "de" || value === "off" ? value : "uk";
};

const langSelectRoot = function (id) {
  return document.getElementById(id);
};

const langSelectFace = function (root) {
  return root ? root.querySelector(".win-select-face") : null;
};

const langSelectMenu = function (root) {
  return root ? root.querySelector(".win-select-menu") : null;
};

const isLangSelectOpen = function (root) {
  const menu = langSelectMenu(root);
  return menu && !menu.classList.contains("is-hidden");
};

const closeLangSelect = function (root) {
  const menu = langSelectMenu(root);
  const face = langSelectFace(root);
  if (!menu || !face) {
    return;
  }
  menu.classList.add("is-hidden");
  face.setAttribute("aria-expanded", "false");
};

const closeAllLangSelects = function () {
  closeLangSelect(langSelectRoot("set-ui-lang"));
  closeLangSelect(langSelectRoot("set-gloss-lang"));
};

const openLangSelect = function (root) {
  closeAllLangSelects();
  const menu = langSelectMenu(root);
  const face = langSelectFace(root);
  if (!menu || !face) {
    return;
  }
  menu.classList.remove("is-hidden");
  face.setAttribute("aria-expanded", "true");
};

const renderLangSelect = function (rootId, value) {
  const root = langSelectRoot(rootId);
  if (!root) {
    return;
  }
  const items = root.querySelectorAll("[data-lang]");
  let label = "";
  for (let i = 0; i < items.length; i += 1) {
    const on = items[i].getAttribute("data-lang") === value;
    items[i].setAttribute("aria-selected", on ? "true" : "false");
    if (on) {
      label = String(items[i].textContent || "").replace(/\s+/g, " ").trim();
    }
  }
  const current = document.getElementById(rootId + "-current");
  if (current && label) {
    current.textContent = label;
  }
};

const applyUiLangSetting = function () {
  const lang = coerceUiLang(window.IMPULS.settings.uiLang);
  if (typeof window.IMPULS.applyUiLang === "function") {
    window.IMPULS.applyUiLang();
  }
  renderLangSelect("set-ui-lang", lang);
  renderLangSelect("set-gloss-lang", coerceGlossLang(window.IMPULS.settings.glossLang));
};

const applyGlossLangSetting = function () {
  const value = coerceGlossLang(window.IMPULS.settings.glossLang);
  if (typeof window.IMPULS.applyUiLang === "function") {
    window.IMPULS.applyUiLang();
  }
  renderLangSelect("set-gloss-lang", value);
};

const stepLangValue = function (values, current, delta) {
  let index = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] === current) {
      index = i;
      break;
    }
  }
  const next = index + delta;
  if (next < 0 || next >= values.length) {
    return current;
  }
  return values[next];
};

const bindLangSelect = function (rootId, values, settingKey, applyFn, coerce) {
  const root = langSelectRoot(rootId);
  if (!root) {
    return;
  }
  const face = langSelectFace(root);
  const menu = langSelectMenu(root);
  if (face) {
    face.addEventListener("click", function () {
      if (isLangSelectOpen(root)) {
        closeLangSelect(root);
        return;
      }
      openLangSelect(root);
    });
  }
  root.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  // Колесо гортає лише закритий список; на краях стоп, сторінку не скролити.
  root.addEventListener("wheel", function (event) {
    event.preventDefault();
    if (isLangSelectOpen(root)) {
      return;
    }
    const current = coerce(window.IMPULS.settings[settingKey]);
    const delta = event.deltaY > 0 ? 1 : event.deltaY < 0 ? -1 : 0;
    if (!delta) {
      return;
    }
    const next = stepLangValue(values, current, delta);
    if (next === current) {
      return;
    }
    window.IMPULS.setSetting(settingKey, next);
    applyFn();
  }, { passive: false });
  if (menu) {
    menu.addEventListener("click", function (event) {
      const item = event.target.closest("[data-lang]");
      if (!item) {
        return;
      }
      const value = coerce(item.getAttribute("data-lang"));
      window.IMPULS.setSetting(settingKey, value);
      closeLangSelect(root);
      applyFn();
    });
  }
};

const bindUiLang = function () {
  bindLangSelect("set-ui-lang", UI_LANGS, "uiLang", applyUiLangSetting, coerceUiLang);
};

const bindGlossLang = function () {
  bindLangSelect("set-gloss-lang", GLOSS_LANGS, "glossLang", applyGlossLangSetting, coerceGlossLang);
};

const bindLangSelectOutside = function () {
  document.addEventListener("click", function (event) {
    const ui = langSelectRoot("set-ui-lang");
    const gloss = langSelectRoot("set-gloss-lang");
    if (ui && ui.contains(event.target)) {
      return;
    }
    if (gloss && gloss.contains(event.target)) {
      return;
    }
    closeAllLangSelects();
  });
};

const bindShuffleOptions = function () {
  const box = document.getElementById("set-shuffle-options");
  if (!box) {
    return;
  }
  box.addEventListener("change", function () {
    window.IMPULS.setSetting("shuffleOptions", box.checked !== false);
    applyShuffleOptions();
  });
};

const bindSpeakForm = function () {
  const box = document.getElementById("set-speak-form");
  if (!box) {
    return;
  }
  box.addEventListener("change", function () {
    window.IMPULS.setSetting("speakForm", box.checked === true);
    applySpeakForm();
  });
};

const bindOptionLayout = function () {
  const list = document.getElementById("set-layout-list");
  const table = document.getElementById("set-layout-table");
  const keys = document.getElementById("set-layout-keys");
  const onChange = function (event) {
    const raw = event.target.value;
    const value = raw === "table" || raw === "keys" ? raw : "list";
    window.IMPULS.setSetting("optionLayout", value);
    applyOptionLayout();
  };
  if (list) {
    list.addEventListener("change", onChange);
  }
  if (table) {
    table.addEventListener("change", onChange);
  }
  if (keys) {
    keys.addEventListener("change", onChange);
  }
};

const blankSeenPacks = function () {
  return { p1: [], p2: [], p3: [], p4: [], p5: [] };
};

const showClearConfirm = function (on) {
  const btn = document.getElementById("btn-clear-progress");
  const confirm = document.getElementById("clear-progress-confirm");
  if (btn) {
    btn.classList.toggle("is-hidden", on);
  }
  if (confirm) {
    confirm.classList.toggle("is-hidden", !on);
  }
};

const resetPackSeenLabels = function () {
  const labels = document.querySelectorAll("[data-pack] .pack-seen");
  for (let i = 0; i < labels.length; i += 1) {
    const bits = String(labels[i].textContent).split("/");
    const total = bits.length > 1 ? bits[1].trim() : "0";
    labels[i].textContent = "0 / " + total;
  }
};

// Скидання даних, не setSetting: theme і settings лишаються.
window.IMPULS.clearProgress = function () {
  try {
    window.IMPULS.save("seen", blankSeenPacks());
  } catch (err) {
    // Сховище інколи недоступне.
  }
  try {
    window.IMPULS.save("round", null);
  } catch (err) {
    // Сховище інколи недоступне.
  }
  const state = window.IMPULS.state;
  if (state) {
    state.first = {};
    state.latency = {};
    state.main = [];
    state.repair = [];
    state.currentId = null;
    state.presented = [];
  }
  resetPackSeenLabels();
  const median = document.getElementById("stat-median");
  if (median) {
    median.textContent = "";
    median.classList.add("is-hidden");
  }
};

const bindClearProgress = function () {
  const btn = document.getElementById("btn-clear-progress");
  const cancel = document.getElementById("btn-clear-cancel");
  const wipe = document.getElementById("btn-clear-wipe");
  if (btn) {
    btn.addEventListener("click", function () {
      showClearConfirm(true);
      if (cancel) {
        cancel.focus();
      }
    });
  }
  if (cancel) {
    cancel.addEventListener("click", function () {
      showClearConfirm(false);
      if (btn) {
        btn.focus();
      }
    });
  }
  if (wipe) {
    wipe.addEventListener("click", function () {
      try {
        window.IMPULS.clearProgress();
      } catch (err) {
        // Стирання не обриває застосунок.
      }
      showClearConfirm(false);
      if (btn) {
        btn.focus();
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  try {
    bindClearProgress();
    bindShowKeys();
    applyShowKeys();
    bindShowMedian();
    applyShowMedian();
    bindOptionLayout();
    applyOptionLayout();
    bindUiSound();
    applyUiSound();
    bindSpeakForm();
    applySpeakForm();
    bindShuffleOptions();
    applyShuffleOptions();
    bindUiLang();
    applyUiLangSetting();
    bindGlossLang();
    applyGlossLangSetting();
    bindLangSelectOutside();
  } catch (err) {
    // Підтвердження стирання не обриває старт.
  }
});

window.IMPULS.loadSettings();
applyShowKeys();
applyShowMedian();
applyOptionLayout();
applyUiSound();
applySpeakForm();
applyShuffleOptions();
applyUiLangSetting();
applyGlossLangSetting();
