window.IMPULS = window.IMPULS || {};

window.IMPULS.defaultSettings = {
  version: 1,
  showKeys: true,
  optionLayout: "list",
  uiSound: false,
  speakForm: false
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
  if (window.IMPULS.settings.optionLayout !== "table") {
    window.IMPULS.settings.optionLayout = "list";
  }
  if (window.IMPULS.settings.uiSound !== true) {
    window.IMPULS.settings.uiSound = false;
  }
  if (window.IMPULS.settings.speakForm !== true) {
    window.IMPULS.settings.speakForm = false;
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

const applyOptionLayout = function () {
  const layout = window.IMPULS.settings.optionLayout === "table" ? "table" : "list";
  document.documentElement.setAttribute("data-option-layout", layout);
  const list = document.getElementById("set-layout-list");
  const table = document.getElementById("set-layout-table");
  if (list) {
    list.checked = layout === "list";
  }
  if (table) {
    table.checked = layout === "table";
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
  const onChange = function (event) {
    const value = event.target.value === "table" ? "table" : "list";
    window.IMPULS.setSetting("optionLayout", value);
    applyOptionLayout();
  };
  if (list) {
    list.addEventListener("change", onChange);
  }
  if (table) {
    table.addEventListener("change", onChange);
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
    bindOptionLayout();
    applyOptionLayout();
    bindUiSound();
    applyUiSound();
    bindSpeakForm();
    applySpeakForm();
  } catch (err) {
    // Підтвердження стирання не обриває старт.
  }
});

window.IMPULS.loadSettings();
applyShowKeys();
applyOptionLayout();
applyUiSound();
applySpeakForm();
