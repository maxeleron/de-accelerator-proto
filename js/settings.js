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

window.IMPULS.loadSettings();
