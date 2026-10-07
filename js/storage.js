window.IMPULS = window.IMPULS || {};

IMPULS.save = function (key, value) {
  var raw = localStorage.getItem("impuls.v1");
  var bag = {};
  if (raw) {
    try {
      bag = JSON.parse(raw) || {};
    } catch (err) {
      bag = {};
    }
  }
  bag[key] = value;
  localStorage.setItem("impuls.v1", JSON.stringify(bag));
};

IMPULS.load = function (key) {
  var raw = localStorage.getItem("impuls.v1");
  if (!raw) {
    return undefined;
  }
  try {
    var bag = JSON.parse(raw) || {};
    return bag[key];
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
  btn.setAttribute("aria-label", next === "light" ? "Темна тема" : "Світла тема");
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
