window.IMPULS = window.IMPULS || {};

window.IMPULS.save = function (key, value) {
  let bag;
  try {
    bag = JSON.parse(localStorage.getItem("impuls.v1"));
  } catch (err) {
    bag = null;
  }
  if (!bag || typeof bag !== "object" || Array.isArray(bag)) {
    bag = {};
  }
  bag[key] = value;
  localStorage.setItem("impuls.v1", JSON.stringify(bag));
};

window.IMPULS.load = function (key) {
  try {
    const bag = JSON.parse(localStorage.getItem("impuls.v1"));
    return bag && typeof bag === "object" && !Array.isArray(bag) && Object.prototype.hasOwnProperty.call(bag, key) ? bag[key] : undefined;
  } catch (err) {
    return undefined;
  }
};

window.IMPULS.readTheme = function () {
  try {
    return window.IMPULS.load("theme") === "light" ? "light" : "dark";
  } catch (err) {
    return "dark";
  }
};

window.IMPULS.applyTheme = function (theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  const btn = document.getElementById("btn-theme");
  if (!btn) {
    return;
  }
  if (typeof window.IMPULS.t === "function") {
    btn.setAttribute("aria-label", next === "light" ? window.IMPULS.t("theme.dark") : window.IMPULS.t("theme.light"));
  } else {
    btn.setAttribute("aria-label", next === "light" ? "Темна тема" : "Світла тема");
  }
};

window.IMPULS.toggleTheme = function () {
  const now = document.documentElement.getAttribute("data-theme");
  const next = now === "light" ? "dark" : "light";
  window.IMPULS.applyTheme(next);
  try {
    window.IMPULS.save("theme", next);
  } catch (err) {
    // Сховище інколи недоступне. Тема лишається на цей кадр.
  }
};

// До CSS і першого кадру, щоб світла тема не блимала темним.
window.IMPULS.applyTheme(window.IMPULS.readTheme());
