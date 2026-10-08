window.IMPULS = window.IMPULS || {};

// Пауза під час вікна заборонена: Esc раунд не зупиняє.
const roundSetupOpen = function () {
  const panel = document.getElementById("round-setup");
  return panel && !panel.classList.contains("is-hidden");
};

const packRowButtons = function () {
  return document.querySelectorAll("#screen-menu .rows button");
};

const packIdFromButton = function (btn) {
  if (!btn) {
    return null;
  }
  const id = btn.getAttribute("data-pack");
  if (id) {
    return id;
  }
  if (btn.id === "btn-mix") {
    return "mix";
  }
  return null;
};

const currentPackIndex = function () {
  const buttons = packRowButtons();
  const pack = window.IMPULS.state.pack;
  for (let i = 0; i < buttons.length; i += 1) {
    if (packIdFromButton(buttons[i]) === pack) {
      return i;
    }
  }
  return 0;
};

const selectPackAt = function (index) {
  const buttons = packRowButtons();
  if (index < 0 || index >= buttons.length) {
    return;
  }
  const id = packIdFromButton(buttons[index]);
  if (!id) {
    return;
  }
  window.IMPULS.selectPack(id);
};

const selectWindowKey = function (key) {
  if (key === "1") {
    window.IMPULS.selectWindow(0);
    return true;
  }
  if (key === "2") {
    window.IMPULS.selectWindow(2500);
    return true;
  }
  if (key === "3") {
    window.IMPULS.selectWindow(1800);
    return true;
  }
  if (key === "4") {
    window.IMPULS.selectWindow(1200);
    return true;
  }
  return false;
};

const onMenuKey = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-start").click();
    return;
  }
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
    const index = currentPackIndex();
    // На краях ряду стоп, по колу не ходити.
    if (event.key === "ArrowUp") {
      selectPackAt(index - 1);
      return;
    }
    selectPackAt(index + 1);
    return;
  }
  if (event.key === "0") {
    event.preventDefault();
    selectPackAt(packRowButtons().length - 1);
    return;
  }
  if (event.key < "1" || event.key > "9") {
    return;
  }
  // 1–4 — межі лише коли панель прогону відкрита.
  if (roundSetupOpen() && selectWindowKey(event.key)) {
    event.preventDefault();
    return;
  }
  const n = Number(event.key);
  const buttons = packRowButtons();
  if (n > buttons.length) {
    return;
  }
  event.preventDefault();
  selectPackAt(n - 1);
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
