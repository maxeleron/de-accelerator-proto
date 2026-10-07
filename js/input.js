window.IMPULS = window.IMPULS || {};

// Пауза під час вікна заборонена: Esc раунд не зупиняє.
const roundSetupOpen = function () {
  const panel = document.getElementById("round-setup");
  return panel && !panel.classList.contains("is-hidden");
};

const onMenuKey = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-start").click();
    return;
  }
  // Клавіші межі лише коли панель прогону відкрита.
  if (!roundSetupOpen()) {
    return;
  }
  if (event.key === "1") {
    window.IMPULS.selectWindow(0);
    return;
  }
  if (event.key === "2") {
    window.IMPULS.selectWindow(2500);
    return;
  }
  if (event.key === "3") {
    window.IMPULS.selectWindow(1800);
    return;
  }
  if (event.key === "4") {
    window.IMPULS.selectWindow(1200);
  }
};

const onRoundKey = function (event) {
  if (event.key === "Escape") {
    return;
  }
  const index = keyIndex(event.key);
  if (index < 0) {
    return;
  }
  // Час відповіді міряється до keydown, не до keyup.
  event.preventDefault();
  window.IMPULS.choose(index);
};

const keyIndex = function (key) {
  if (key === "1") {
    return 0;
  }
  if (key === "2") {
    return 1;
  }
  if (key === "3") {
    return 2;
  }
  if (key === "4") {
    return 3;
  }
  return -1;
};

window.IMPULS.bindKeys = function () {
  document.addEventListener("keydown", function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const phase = window.IMPULS.state.phase;
    if (phase === "menu") {
      onMenuKey(event);
      return;
    }
    if (phase === "base") {
      if (event.key === "Escape") {
        event.preventDefault();
        window.IMPULS.closeBase();
      }
      return;
    }
    if (phase === "settings") {
      if (event.key === "Escape") {
        event.preventDefault();
        window.IMPULS.closeSettings();
      }
      return;
    }
    if (phase === "round" || phase === "repair") {
      onRoundKey(event);
    }
  });
};
