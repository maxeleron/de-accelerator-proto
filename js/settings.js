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

const emptySeen = function () {
  return { p1: [], p2: [], p3: [], p4: [] };
};

const showClearConfirm = function (on) {
  document.getElementById("btn-clear-progress").classList.toggle("is-hidden", on);
  document.getElementById("clear-progress-confirm").classList.toggle("is-hidden", !on);
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
    window.IMPULS.save("seen", emptySeen());
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
  document.getElementById("btn-clear-progress").addEventListener("click", function () {
    showClearConfirm(true);
    document.getElementById("btn-clear-cancel").focus();
  });
  document.getElementById("btn-clear-cancel").addEventListener("click", function () {
    showClearConfirm(false);
    document.getElementById("btn-clear-progress").focus();
  });
  document.getElementById("btn-clear-wipe").addEventListener("click", function () {
    window.IMPULS.clearProgress();
    showClearConfirm(false);
    document.getElementById("btn-clear-progress").focus();
  });
};

document.addEventListener("DOMContentLoaded", function () {
  bindClearProgress();
});

window.IMPULS.loadSettings();
