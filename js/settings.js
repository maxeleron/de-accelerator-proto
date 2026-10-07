window.IMPULS = window.IMPULS || {};

window.IMPULS.defaultSettings = {
  version: 1
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

const blankSeenPacks = function () {
  return { p1: [], p2: [], p3: [], p4: [] };
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
  const labels = document.querySelectorAll(".pack-seen");
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
  } catch (err) {
    // Підтвердження стирання не обриває старт.
  }
});

window.IMPULS.loadSettings();
